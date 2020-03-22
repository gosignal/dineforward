import Adapt, {
    AdaptMountedElement,
    ChangeType,
    childrenToArray,
    DeployHelpers,
    DeployStatus,
    GoalStatus,
    waiting,
    Handle,
    BuiltinProps,
    handle,
    AdaptElement,
    Sequence,
    SFCBuildProps,
    useBuildHelpers
} from "@adpt/core";
import * as ld from "lodash";
import execa = require("execa");
import { ExecaError } from "execa";

import { InternalError } from "@adpt/utils";
import { Action, ActionContext, ShouldAct } from "@adpt/cloud/action";
import {
    Environment,
    EnvSimple,
    mergeEnvSimple,
    makeResourceName,
    useLatestImageFrom
} from "@adpt/cloud";
import { RegistryDockerImage } from "@adpt/cloud/dist/src/docker";

export function isExecaError(e: Error): e is ExecaError {
    if (!e.message.startsWith("Command failed")) return false;
    if (!("exitCode" in e)) return false;
    return true;
}

interface Config {
    name: string;
    env: EnvSimple;
    args: EnvSimple;
    image: string;
    region: string;
    port: number;
}

type Manifest = any;

/**
 * Decides if an existing Run deployment is scheduled for deletion
 */
function isDeleting(info: Manifest | undefined): boolean {
    return (info !== undefined) && ("deletionTimestamp" in info.metadata);
}

export interface CloudRunProps {
    env?: Environment;
    args?: Environment;
    image: string;
    //Region should be optional, but for now we'll require it
    region: string;
    port: number;
}

async function cloudRunDescribe(config: Config): Promise<Manifest> {
    try {
        const result = await execa("gcloud", [
            "run",
            "services",
            "describe",
            "--quiet",
            "--platform=managed",
            "--format=json",
            `--region=${config.region}`,
            config.name
        ]);

        return JSON.parse(result.stdout);
    } catch (e) {
        if (isExecaError(e)) {
            e.message += "\n" + e.all;
            if (e.exitCode !== 0) {
                if (e.stderr.match(/Cannot find service/)) return undefined;
            }
        }
        throw e;
    }
}

async function cloudRunDeploy(config: Config): Promise<void> {
    const env = config.env;
    const args = config.args;
    const envString = Object.entries(env).map(([k, v]) => `${k}=${v}`).join(",");
    const argsString = Object.entries(args).map(([k, v]) => `${k}=${v}`).join(",");

    const gcargs = [
        "run",
        "deploy",
        config.name,
        "--quiet",
        "--platform=managed",
        "--format=json",
        `--image=${config.image}`,
        `--region=${config.region}`,
        `--port=${config.port}`,
        `--set-env-vars=${envString}`,
        `--args=${argsString}`
    ];

    if (envString) gcargs.push("--set-env-vars", envString);

    try {
        await execa("gcloud", gcargs);
    } catch (e) {
        if (isExecaError(e)) {
            e.message += "\n" + e.all;
        }
        throw e;
    }
}

async function cloudRunDelete(config: Config): Promise<void> {
    try {
        await execa("gcloud", [
            "run",
            "services",
            "delete",
            config.name,
            "--quiet",
            "--platform=managed",
            "--format=json",
            `--region=${config.region}`
        ]);
    } catch (e) {
        if (isExecaError(e)) {
            e.message += "\n" + e.all;
            if (e.exitCode !== 0) {
                if (e.stderr.match(/Cannot find service/)) return;
            }
        }
        throw e;
    }
}

/**
 * Primitive Component for GCP Cloud Run deployments
 * @public
 */
export class CloudRun extends Action<CloudRunProps> {
    config_: Config;

    constructor(props: CloudRunProps) {
        super(props);
    }

    validate() {
        const children = childrenToArray((this.props as any).children);

        if (!ld.isEmpty(children)) return "Resource elements cannot have children";

        if ((this.props.port) < 1 || (this.props.port > 65535)) {
            throw new Error(`Invalid port ${this.props.port} (must be between 1 and 65535)`);
        }
        //Do other validations of config here
        return;
    }

    async shouldAct(op: ChangeType, ctx: ActionContext): Promise<ShouldAct> {
        const deployID = ctx.buildData.deployID;
        const config = this.config(deployID);
        const name = config.name;

        const oldManifest = await cloudRunDescribe(config);

        switch (op) {
            case ChangeType.create:
            case ChangeType.modify:
            case ChangeType.replace:
                if (oldManifest === undefined || isDeleting(oldManifest)) {
                    return {
                        act: true,
                        detail: `Creating CloudRun deployment ${name}`
                    };
                } else {
                    return { act: true, detail: `Updating CloudRun deployment ${name}` };
                }
            case ChangeType.delete:
                if (oldManifest && !isDeleting(oldManifest)) {
                    return {
                        act: true,
                        detail: `Deleting CloudRun deployment ${name}`
                    };
                }
                return false;
            case ChangeType.none:
                return false;
        }
    }

    async action(op: ChangeType, ctx: ActionContext): Promise<void> {
        const deployID = ctx.buildData.deployID;
        const config = this.config(deployID);
        const info = await cloudRunDescribe(config);
        let deleted = false;

        if (isDeleting(info)) {
            //Wait for deleting to complete, else create/modify/apply will fail
            await cloudRunDelete(config);
            deleted = true;
        }

        switch (op) {
            case ChangeType.create:
            case ChangeType.modify:
            case ChangeType.replace:
                await cloudRunDeploy(config);
                return;
            case ChangeType.delete:
                if (deleted) return;
                await cloudRunDelete(config);
                return;
            case ChangeType.none:
                return;
        }
    }

    deployedWhen = async (goalStatus: GoalStatus, helpers: DeployHelpers) => {
        const statObj = await cloudRunDescribe(this.config(this.deployInfo.deployID));
        if (statObj === undefined) return true;
        if (goalStatus === DeployStatus.Destroyed) {
            return waiting(`Waiting for CloudRun deployment to be destroyed`);
        }
        return isReady(statObj);
    }

    private mountedElement(): AdaptMountedElement<CloudRunProps> {
        const handle = this.props.handle;
        if (handle === undefined) throw new InternalError("element requested but props.handle undefined");
        const elem = handle.mountedOrig;
        if (elem == null) throw new InternalError(`element requested but handle.mountedOrig is ${elem}`);
        return elem as AdaptMountedElement<CloudRunProps>;
    }

    private config(deployID: string): Config {
        if (this.config_) return this.config_;
        const elem = this.mountedElement();
        const key = this.props.key
        if (key == null) throw new Error("Internal Error: key is falsey");
        this.config_ = {
            name: makeCloudRunName(key, elem.id, deployID),
            env: mergeEnvSimple(this.props.env) || {},
            args: mergeEnvSimple(this.props.args) || {},
            image: this.props.image,
            port: this.props.port,
            region: this.props.region
        }
        return this.config_;
    }
}

function isReady(status: any) {
    if (!status || !status.status) return waiting(`Kubernetes cluster returned invalid status for Pod`);
    if (status.status.phase === "Running") return true;
    if (status.status.conditions == null) return waiting("Waiting for CloudRun conditions");
    if (!Array.isArray(status.status.conditions)) return waiting("Waiting for CloudRun to populate conditions");
    const conditions: any[] = status.status.conditions;

    const ready = conditions
        .find((cond: any) => (cond.status === "True" && cond.type === "Ready"))
    if (ready !== undefined) return true;

    let msg = "CloudRun not ready";
    const notReady = conditions
        .filter((cond: any) => cond.status !== "True")
        .map((cond: any) => cond.message)
        .join("; ");
    if (notReady) msg += `: ${notReady}`;
    return waiting(msg);
}

const makeCloudRunName = makeResourceName(/[^a-z-]/g, 63);

export type CloudRunAdapterProps =
    Omit<CloudRunProps, "image"> & {
        image: Handle,
        registryUrl: string
    } & Partial<BuiltinProps>;

/** 
 * Temporary adapter to allow handle for image
 */
export function CloudRunAdapter(propsIn: CloudRunAdapterProps) {
    const props = propsIn as SFCBuildProps<CloudRunAdapterProps>;
    const { handle: origHandle, ...propsNoHandle } = props;

    const cloudRun = handle();
    const regImage = handle();

    const helpers = useBuildHelpers();
    const image = useLatestImageFrom(regImage);
    let crElem: AdaptElement | null = null;
    if (image) {
        const crProps = { ...propsNoHandle, image };
        crElem = <CloudRun handle={cloudRun} {...(crProps as any)} />;
        origHandle.replaceTarget(crElem, helpers);
    }

    return <Sequence>
        <RegistryDockerImage handle={regImage}
            imageSrc={props.image}
            registryUrl={props.registryUrl} />
        {crElem}
    </Sequence>
}

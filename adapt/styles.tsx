import Adapt, {
    concatStyles,
    Style,
    StyleBuildInfo,
    ruleNoRematch
} from "@adpt/core";

import { Service, ServiceProps, Environment } from "@adpt/cloud";
import { MongoDB, TestMongoDB } from "@adpt/cloud/mongodb";
import { Redis, TestRedis } from "@adpt/cloud/redis";
import dotenv from "dotenv";
import { ServiceContainerSet } from "@adpt/cloud/dist/src/docker";
import { Cloudinary, CloudinaryProvider, GoogleMaps, GoogleMapsProvider, MongoDBProvider, RedisProvider, GoogleAuthProvider, GoogleAuth, FacebookAuth, FacebookAuthProvider } from "./lib";
import { readFileSync } from "fs-extra";
import { CloudRunAdapter, CloudRunAdapterProps } from "./gcloud/CloudRun";
import { DfApi, DfApiProps } from "./df_api";
import execa = require("execa");
import { isString } from "util";

export function kubeClusterInfo() {
    // tslint:disable-next-line:no-var-requires
    return { kubeconfig: require(process.env["KUBECONFIG"] || "./kubeconfig") }
}

// Terminate containers quickly for demos
const demoProps = {
    podProps: { terminationGracePeriodSeconds: 0 }
};

function readEnv() {
    const envLoc = process.env.DOTENV
    if (envLoc == null) {
        throw new Error("DOTENV environment variable not specified");
    }

    let envBuf = new Buffer("");
    try {
        envBuf = readFileSync(envLoc);
    } catch (e) {
        throw new Error(`Unable to read configuration from "${envLoc}": ${e.message}`);
    }
    let env: Environment;
    try {
        env = dotenv.parse(envBuf);
    } catch (e) {
        throw new Error(`Unable to parse "${envLoc}": ${e.message}`);
    }
    if (env.COOKIE_SECRET == null || env.COOKIE_SECRET === "") {
        throw new Error("You must specify a COOKIE_SECRET in DOTENV");
    }
    return env;
}

const env = readEnv();

/*
 * Style rules common to all dev style sheets
 */
function commonDevStyle() {
    return <Style>
    </Style>;
}

async function gcloudDefaultProject(): Promise<string | undefined> {
    const projectResult = await execa("gcloud", ["config", "get-value", "core/project", "--format=json"]);
    const project = JSON.parse(projectResult.stdout);
    if (isString(project)) return project;
    return undefined;
}

function gcloudRegistryUrl(project: string) {
    let url = process.env.CLOUDRUN_REGISTRY_URL || env.CLOUDRUN_REGISTRY_URL;
    if (!url) {
        if (project) return `gcr.io/${project}`;
        throw new Error("Cannot compute default value for CLOUDRUN_REGISTRY_URL"
            + "please set via an environment variable or DOTENV variable");
    }
    if (!url.startsWith("gcr.io")) {
        throw new Error("The registryUrl must start with gcr.io for CLOUDRUN_REGISTRY_URL");
    }
    return url;
}

/*
 * Docker testing/dev style
 */
export const dockerDevStyle = concatStyles(commonDevStyle(),
    <Style>
        {MongoDB} {Adapt.rule(() => <TestMongoDB />)}
        {Redis} {Adapt.rule(() => <TestRedis />)}
        {Cloudinary} {Adapt.rule(() => <CloudinaryProvider uri={env.CLOUDINARY_URL} />)}
        {GoogleMaps} {Adapt.rule(() => <GoogleMapsProvider key={env.GOOGLE_MAPS_KEY} />)}
        {GoogleAuth} {Adapt.rule(() => <GoogleAuthProvider
            clientId={env.GOOGLE_CLIENT_ID}
            clientSecret={env.GOOGLE_CLIENT_SECRET} />)}
        {FacebookAuth} {Adapt.rule(() => <FacebookAuthProvider
            appId={env.FACEBOOK_APP_ID}
            appSecret={env.FACEBOOK_APP_SECRET} />)}

        {DfApi} {Adapt.rule<DfApiProps>(({ handle, ...props }, info: StyleBuildInfo) =>
            ruleNoRematch(info, <DfApi
                {...{
                    ...props,
                    cookieSecret: env.COOKIE_SECRET,
                }} />))}

        {Service} {Adapt.rule<ServiceProps>(({ handle, ...props }) =>
            <ServiceContainerSet
                {...props}
                {...demoProps}
                containerProps={{
                    restartPolicy: { name: "UnlessStopped" },
                    autoRemove: false
                }} />)}
    </Style>);

async function prodLikeStyle(options: {
    region: string,
    cloudRunServiceName?: string
}) {
    const project = await gcloudDefaultProject();
    if (!project) {
        throw new Error(
            "You must have set a default gcloud project for gcloud styles. "
            + " Use gcloud config set core/project <project name>");
    }
    return <Style>
        {Redis} {Adapt.rule(() => <RedisProvider uri={`redis://${env.REDIS_HOST}:${env.REDIS_PORT}?password=${env.REDIS_PASSWORD}`} />)}
        {MongoDB} {Adapt.rule(() => <MongoDBProvider uri={env.MONGO_URI} />)}
        {Cloudinary} {Adapt.rule(() => <CloudinaryProvider uri={env.CLOUDINARY_URL} />)}
        {GoogleMaps} {Adapt.rule(() => <GoogleMapsProvider key={env.GOOGLE_MAPS_KEY} />)}
        {GoogleAuth} {Adapt.rule(() => <GoogleAuthProvider
            clientId={env.GOOGLE_CLIENT_ID}
            clientSecret={env.GOOGLE_CLIENT_SECRET} />)}
        {FacebookAuth} {Adapt.rule(() => <FacebookAuthProvider
            appId={env.FACEBOOK_APP_ID}
            appSecret={env.FACEBOOK_APP_SECRET} />)}

        {DfApi} {Adapt.rule<DfApiProps>(({ handle, ...props }, info: StyleBuildInfo) =>
            ruleNoRematch(info, <DfApi
                {...{
                    ...props,
                    port: 80,
                    cookieSecret: env.COOKIE_SECRET,
                    externalUrl: env.EXTERNAL_URL
                }} />))}

        {CloudRunAdapter} {Adapt.rule<CloudRunAdapterProps>(({ handle, ...props }, info: StyleBuildInfo) =>
            ruleNoRematch(info, <CloudRunAdapter
                {...{
                    ...props,
                    serviceName: options.cloudRunServiceName,
                    registryUrl: gcloudRegistryUrl(project),
                    allowUnauthenticated: true,
                    cpu: 2,
                    memory: "512Mi",
                    region: options.region
                }} />))}
    </Style>
}

export const stageLikeStyle = prodLikeStyle({ region: "us-west1" });
export const stageStyle = prodLikeStyle({ region: "us-west1", cloudRunServiceName: "df-api-stage" });
export const prodStyle = prodLikeStyle({ region: "us-west1", cloudRunServiceName: "df-api" });
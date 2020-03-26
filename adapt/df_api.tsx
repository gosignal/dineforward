import Adapt, {
    handle,
    Handle,
    SFCDeclProps,
    SFCBuildProps,
    Sequence,
    useImperativeMethods,
    callInstanceMethod,
    useMethodFrom
} from "@adpt/core";
import {
    mergeEnvPairs,
    Environment,
    useConnectTo,
    updateEnvVars,
    NetworkScope,
    NetworkService,
    NetworkServiceScope,
    Service,
    Container,
    ConnectToInstance,
    lookupEnvVar,
    mergeEnvSimple
} from "@adpt/cloud";
import { LocalDockerImage } from "@adpt/cloud/dist/src/docker";
import { readFileSync } from "fs";
import { URL } from "url";
import { CloudRunAdapter } from "./gcloud/CloudRun";

export interface DfApiProps {
    deployType: string;
    port: number;
    mongo: Handle;
    redis: Handle;
    cloudinary: Handle;
    googleMaps: Handle;
    googleAuth: Handle;
    facebookAuth: Handle;
    cookieSecret: string;
    scope: NetworkServiceScope;
    externalUrl?: string;
    cloudRunHack?: boolean;
}

const dfApiDefaultProps = {
    port: 80,
    scope: "external",
    cloudRunHack: false
}

function createEnvVars(e: Environment): Environment {
    const env = updateEnvVars(e, (name, value) => {
        switch (name) {
            case "MONGODB_URI": return { name: "MONGO_URI", value: value }
            default: return { name, value }
        }
    });

    const redisURI = lookupEnvVar(env, "REDIS_URI");
    if (!redisURI) return env;

    const redisInfo = new URL(redisURI);
    return mergeEnvSimple(env, {
        REDIS_PASSWORD: redisInfo.password || redisInfo.searchParams.get("password") || "",
        REDIS_DBNAME: redisInfo.pathname.substr(1) || redisInfo.searchParams.get("db") || "",
        REDIS_HOST: redisInfo.hostname,
        REDIS_ENDPOINT: redisInfo.host,
        REDIS_PORT: redisInfo.port,
    }) || env;
}

export function DfApi(props: SFCDeclProps<DfApiProps>) {
    const {
        deployType,
        mongo,
        redis,
        cloudinary,
        googleMaps,
        port,
        scope,
        googleAuth,
        facebookAuth,
        cookieSecret,
        externalUrl,
        cloudRunHack } =
        props as SFCBuildProps<DfApiProps, typeof dfApiDefaultProps>;

    const connections = useConnectTo(
        [mongo, redis, cloudinary, googleMaps, googleAuth, facebookAuth],
        createEnvVars);

    const env = mergeEnvPairs(connections, {
        COOKIE_SECRET: cookieSecret,
        DF_DEPLOY_TYPE: deployType,
    }, externalUrl ? { EXTERNAL_URL: externalUrl } : {});
    console.log("DfApi env", env)

    const img = handle();
    const netSvc = handle();
    const nodeCtr = handle();

    useMethodFrom(netSvc, "hostname");
    useMethodFrom(netSvc, "port");
    useImperativeMethods<ConnectToInstance>(() => ({
        connectEnv: (): Environment => {
            const hostname = callInstanceMethod<string | undefined>(netSvc, undefined, "hostname", NetworkScope.external);
            const port = callInstanceMethod<string | undefined>(netSvc, undefined, "port");
            if (!(hostname && port)) {
                console.log("No DFAPI hostname or port");
                return {};
            }
            const uri = `http://${hostname}:${port}`;
            console.log("DF URI:", uri);
            return {
                DF_API_URI: uri
            };
        }
    }));

    return <Sequence>
        <LocalDockerImage key={props.key + "-img"} handle={img}
            dockerfile={readFileSync("../Dockerfile").toString()}
            contextDir={".."}
            options={{
                imageName: "dineforward-api",
                uniqueTag: true,
                //FIXME(manishv) we should probably sanitize env
                // to avoid secrets accidentally ending up in the image
                // even thought they aren't required for build.
                // AFAIK, cloudinary vars are the only thing required.
                buildArgs: env
            }} />
        {mongo}
        {cloudRunHack
            ? <CloudRunAdapter
                key={props.key}
                region={"us-west1"}
                port={port} image={img}
                env={env}
                registryUrl={"gcr.io/thisprojectdoesnotexist"} />
            : <Service>
                <NetworkService
                    key={props.key + "-netsvc"}
                    handle={netSvc}
                    endpoint={nodeCtr}
                    port={port}
                    targetPort={80}
                    scope={scope}
                />
                <Container
                    key={props.key}
                    name="node-service"
                    handle={nodeCtr}
                    environment={env}
                    image={img}
                    ports={[8080]}
                    imagePullPolicy="IfNotPresent"
                />
            </Service>}
    </Sequence >
}
DfApi.defaultProps = dfApiDefaultProps;

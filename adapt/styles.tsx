import { Service, ServiceProps } from "@adpt/cloud";
import { MongoDB, TestMongoDB } from "@adpt/cloud/mongodb";
import { Redis, TestRedis } from "@adpt/cloud/redis";
import { ServiceDeployment } from "@adpt/cloud/k8s";
import Adapt, { concatStyles, Style } from "@adpt/core";
import dotenv from "dotenv";
import { ServiceContainerSet } from "@adpt/cloud/dist/src/docker";
import { Cloudinary, CloudinaryProvider, GoogleMaps, GoogleMapsProvider, MongoDBProvider, RedisProvider } from "./lib";
import { readFileSync } from "fs-extra";

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
    try {
        return dotenv.parse(envBuf);
    } catch (e) {
        throw new Error(`Unable to parse "${envLoc}": ${e.message}`);
    }
}

const env = readEnv();

/*
 * Style rules common to all dev style sheets
 */
function commonDevStyle() {
    return <Style>
    </Style>;
}

/*
 * Kubernetes testing/dev style
 */
export const k8sDevStyle = concatStyles(commonDevStyle(),
    <Style>
        {MongoDB} {Adapt.rule(() => <TestMongoDB />)}
        {Redis} {Adapt.rule(() => <TestRedis />)}
        {Cloudinary} {Adapt.rule(() => <CloudinaryProvider uri={env.CLOUDINARY_URL} />)}
        {GoogleMaps} {Adapt.rule(() => <GoogleMapsProvider key={env.GOOGLE_MAPS_KEY} />)}

        {Service} {Adapt.rule<ServiceProps>(({ handle, ...props }) =>
            <ServiceDeployment config={kubeClusterInfo()} {...props} {...demoProps} />)}
    </Style>);

/*
 * Docker testing/dev style
 */
export const dockerDevStyle = concatStyles(commonDevStyle(),
    <Style>
        {MongoDB} {Adapt.rule(() => <TestMongoDB />)}
        {Redis} {Adapt.rule(() => <TestRedis />)}
        {Cloudinary} {Adapt.rule(() => <CloudinaryProvider uri={env.CLOUDINARY_URL} />)}
        {GoogleMaps} {Adapt.rule(() => <GoogleMapsProvider key={env.GOOGLE_MAPS_KEY} />)}

        {Service} {Adapt.rule<ServiceProps>(({ handle, ...props }) =>
            <ServiceContainerSet
                {...props}
                {...demoProps}
                containerProps={{
                    restartPolicy: { name: "UnlessStopped" },
                    autoRemove: false
                }} />)}
    </Style>);

export const prodStyle = <Style>
    {MongoDB} {Adapt.rule(() => <MongoDBProvider uri={`redis://${env.REDIS_HOST}:${env.REDIS_PORT}?password=${env.REDIS_PASSWORD}`} />)}
    {Redis} {Adapt.rule(() => <RedisProvider uri={env.MONGO_URI} />)}
    {Cloudinary} {Adapt.rule(() => <CloudinaryProvider uri={env.CLOUDINARY_URL} />)}
    {GoogleMaps} {Adapt.rule(() => <GoogleMapsProvider key={env.GOOGLE_MAPS_KEY} />)}
</Style>
import { Service, ServiceProps, nginx } from "@adpt/cloud";
import { MongoDB, TestMongoDB } from "@adpt/cloud/mongodb";
import { Redis, TestRedis } from "@adpt/cloud/redis";
import { ServiceDeployment } from "@adpt/cloud/k8s";
import Adapt, { concatStyles, Style } from "@adpt/core";
import dotenv from "dotenv";
import { HttpServerProps, HttpServer } from "@adpt/cloud/http";
import { ServiceContainerSet } from "@adpt/cloud/dist/src/docker";
import { Cloudinary, CloudinaryProvider, GoogleMaps, GoogleMapsProvider } from "./lib";
import { readFileSync } from "fs-extra";

export function kubeClusterInfo() {
    // tslint:disable-next-line:no-var-requires
    return { kubeconfig: require(process.env["KUBECONFIG"] || "./kubeconfig") }
}

// Terminate containers quickly for demos
const demoProps = {
    podProps: { terminationGracePeriodSeconds: 0 }
};

const env = dotenv.parse(readFileSync("../packages/df-api/.env"));

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
        {HttpServer} {Adapt.rule<HttpServerProps>(({ handle, ...props }) => <nginx.HttpServer {...props} scope="external" />)}
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
        {HttpServer} {Adapt.rule<HttpServerProps>(({ handle, ...props }) => <nginx.HttpServer {...props} scope="external" />)}

        {Service} {Adapt.rule<ServiceProps>(({ handle, ...props }) =>
            <ServiceContainerSet
                {...props}
                {...demoProps}
                containerProps={{
                    restartPolicy: { name: "UnlessStopped" },
                    autoRemove: false
                }} />)}
    </Style>);
import {
    callFirstInstanceWithMethod,
    SFCBuildProps,
    SFCDeclProps,
    useImperativeMethods,
} from "@adpt/core";
import {
    NetworkScope,
    NetworkService as AbsNetworkService,
    NetworkServiceInstance,
    NetworkServiceProps,
    ServicePort,
} from "@adpt/cloud";

const defaultProps = AbsNetworkService.defaultProps;

/**
 * Google Cloud Run network service component, compatible with the abstract
 * {@link NetworkService} component.
 *
 * @remarks
 *
 * Implements the {@link NetworkServiceInstance} interface.
 * In a Cloud Run deployment, there is no actual network service object to deploy.
 * So this is a "virtual" component that simply implements the required
 * instance methods for a NetworkService, but renders to null.
 *
 * This component is typically used by {@link gcloud.CloudRunServiceContainerSet}. The
 * {@link gcloud.CloudRunServiceContainerSet} component can be used to ensure the proper
 * network port configuration is applied to the `props.endpoint` container.
 *
 * @public
 */
export function CloudRunNetworkService(props: SFCDeclProps<NetworkServiceProps, typeof defaultProps>) {
    const { endpoint = null, ip, port, scope, targetPort } =
        props as SFCBuildProps<NetworkServiceProps, typeof defaultProps>;

    if (ip) {
        throw new Error(`Setting IP address not supported for gcloud.CloudRunNetworkService`);
    }
    const portNum = toPortNum(port);
    if (targetPort != null) {
        if (toPortNum(targetPort) !== portNum) {
            throw new Error(`Port number translation not supported ` +
                `by gcloud.CloudRunNetworkService. ` +
                `(scope=${scope} port=${port}, targetPort=${targetPort})`);
        }
    }

    useImperativeMethods<NetworkServiceInstance>(() => ({
        hostname: (_scope?: NetworkScope) => {
            if (!endpoint) return undefined;
            return callFirstInstanceWithMethod(endpoint, undefined, "hostname");
        },
        port: () => portNum,
    }));

    return null;
}
// TODO: The "as any" is a workaround for an api-extractor bug. See issue #185.
(CloudRunNetworkService as any).defaultProps = defaultProps;

function toPortNum(input: ServicePort): number {
    const num = Number(input);
    if (isNaN(num) ||
        !Number.isInteger(num) ||
        num <= 0 ||
        num >= 65536) throw new Error(`Invalid port number ${input}`);
    return num;
}

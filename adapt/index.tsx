import Adapt, {
    Group,
    handle
} from "@adpt/core";
import { dockerDevStyle, prodStyle, stageStyle, stageLikeStyle } from "./styles";
import { MongoDB } from "@adpt/cloud/mongodb";
import { Redis } from "@adpt/cloud/redis";
import { Cloudinary, GoogleMaps, GoogleAuth, FacebookAuth } from "./lib";
import { CloudRun } from "./gcloud";
import { DfApi } from "./df_api";

function App(props: { cloudRunHack?: boolean }) {
    const mongo = handle();
    const api = handle();
    const redis = handle();
    const cloudinary = handle();
    const googleMaps = handle();
    const googleAuth = handle();
    const facebookAuth = handle();

    return <Group key="App">
        <MongoDB handle={mongo} />
        <Redis handle={redis} />
        <Cloudinary handle={cloudinary} />
        <GoogleMaps handle={googleMaps} />
        <GoogleAuth handle={googleAuth} />
        <FacebookAuth handle={facebookAuth} />
        <DfApi key="df-api" handle={api} port={8080}
            mongo={mongo}
            redis={redis}
            cloudinary={cloudinary}
            googleMaps={googleMaps}
            googleAuth={googleAuth}
            facebookAuth={facebookAuth}
            cloudRunHack={props.cloudRunHack}
            deployType="dev"
        />
    </Group>;
}

Adapt.stack("default", <App />, dockerDevStyle);
Adapt.stack("local-dev", <App />, dockerDevStyle);
//cloudRunHack={true} is a temporary workaround because there is no abstract
//cloud.Service component that renders to gcloud.CloudRun isntances
Adapt.stack("gcloud-stagelike-dev", <App cloudRunHack={true} />, stageLikeStyle);
Adapt.stack("gcloud-stage", <App cloudRunHack={true} />, stageStyle)
Adapt.stack("gcloud-prod", <App cloudRunHack={true} />, prodStyle);

// Testing environments for complex components, should be 
// factored out into separate package with CI and tests
Adapt.stack("gcloudrun-raw-test", <CloudRun region="us-west1" port={5678} image="gcr.io/adaptjs-demo-project/http-echo" args={{ "-text": "foo" }} />);

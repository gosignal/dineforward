#!/usr/bin/env node

const dotenv = require("dotenv");
const { readFileSync, writeFileSync, unlinkSync } = require("fs");
const path = require("path");

const {
    apiImage,
    apiServiceBase,
    projectName,
    region,
    rootDir,
} = require("./config");
const { buildRev, run } = require("./lib");

function usage() {
    console.log(`
Deploy DineForward Back-End

  ${path.basename(process.argv[1])} ENVNAME ENVFILE [TRAFFICPCT]

  ENVNAME    The name of an environment to create or update. "prod" for
             production.
  ENVFILE    A file in Dotenv format that contains environment variables for
             the deployment.
  TRAFFICPCT The percentage of traffic (0-100) that should go to the newly
             deployed version.
`);
}

const imageNameTag = envName => {
    return `gcr.io/${projectName}/${apiImage}:${envName}`;
};

const serviceName = envName => {
    const suffix = envName === "prod" ? "" : `-${envName}`;
    return apiServiceBase + suffix;
}

function build(envName, env) {
    const tag = imageNameTag(envName);
    const buildArgs = [];
    Object.entries(env).forEach(([k,v]) => buildArgs.push("--build-arg", `${k}=${v}`));
    buildArgs.push("--build-arg", `DF_BUILD_REV=${buildRev()}`);

    const buildConfig = {
        steps: [{
            "name": "gcr.io/cloud-builders/docker",
            "args": [ "build", "-t", tag, ...buildArgs, "." ],
          }],
        "images": [ tag ],
    };
    const configFileName = ".gcloudbuild.json";
    const configFilePath = path.join(rootDir, configFileName);
    writeFileSync(configFilePath, JSON.stringify(buildConfig));

    try {
        const args = [
            "gcloud", "builds", "submit",
            "--config", configFileName,
        ];
        run(args);
    } finally {
        unlinkSync(configFilePath);
    }
}

function deploy(envName, trafficPct, env) {
    const envString = Object.entries(env).map(([k,v]) => `${k}=${v}`).join(",");

    run([
        "gcloud", "run", "deploy", serviceName(envName),
        "--image", imageNameTag(envName),
        "--platform", "managed",
        "--region", region,
        "--allow-unauthenticated",
        "--memory", "512M",
        "--cpu", "2",
        "--set-env-vars", envString,
    ]);
    run([
        "gcloud", "run", "services", "update-traffic", serviceName(envName),
        "--platform", "managed",
        "--region", region,
        "--to-revisions", `LATEST=${trafficPct}`,
    ]);
}

function main(envName, envFile, trafficPct) {
    if (!envName || !envFile) {
        usage();
        process.exit(1);
    }
    if (!trafficPct) trafficPct = "100";
    const nTraffic = parseInt(trafficPct, 10);
    if (isNaN(nTraffic)) throw new Error(`Traffic percentage must be an integer`);
    if (nTraffic < 0 || nTraffic > 100) throw new Error(`Traffic percentage must be from 0 to 100`);

    const envFileContents = readFileSync(envFile).toString();
    const env = dotenv.parse(envFileContents);

    build(envName, env);
    deploy(envName, trafficPct, env);
}

main(...process.argv.slice(2));

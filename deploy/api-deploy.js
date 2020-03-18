#!/usr/bin/env node

const dotenv = require("dotenv");
const { readFileSync } = require("fs");

const {
    apiImage,
    apiService,
    envFile,
    projectName,
    region,
} = require("./config");
const { run } = require("./lib");

const imageTag = `gcr.io/${projectName}/${apiImage}`;

function build() {
    const args = [
        "gcloud", "builds", "submit",
        "--tag", imageTag,
    ];
    run(args);
}

function deploy() {
    const envFileContents = readFileSync(envFile).toString();
    const env = dotenv.parse(envFileContents);
    const envString = Object.entries(env).map(([k,v]) => `${k}=${v}`).join(",");

    const args = [
        "gcloud", "run", "deploy", apiService,
        "--image", imageTag,
        "--platform", "managed",
        "--region", region,
        "--allow-unauthenticated",
        "--set-env-vars", envString,
    ];
    run(args);
}

function main() {
    build();
    deploy();
}

main();

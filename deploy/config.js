const path = require("path");

const rootDir = path.dirname(__dirname);
const apiDir = path.join(rootDir, "packages", "df-api");
const clientDir = path.join(rootDir, "packages", "df-client");

const config = {
    apiDir,
    apiImage: "df-api",
    apiServiceBase: "df-api",
    clientDir,
    projectName: "dineforward",
    region: "us-west1",
    rootDir,
};

module.exports = config;

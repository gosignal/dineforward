#!/usr/bin/env node

const {
    clientBucket,
    clientDir,
} = require("./config");
const { run } = require("./lib");

const exportDir = "out";
const cmdOpts = {
    cwd: clientDir,
};

function main() {
    run([ "yarn", "export" ], cmdOpts);
    run([ "gsutil", "-m", "rsync", "-d", "-r", exportDir, clientBucket ], cmdOpts);
}

main();

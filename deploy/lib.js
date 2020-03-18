const { execFileSync } = require("child_process");

const {
    rootDir,
} = require("./config");

const runDefaults = {
    cwd: rootDir,
    stdio: "inherit",
};

exports.run = function run(args, opts = {}) {
    opts = { ...runDefaults, ...opts };
    console.log(`Running: ${args.join(" ")}`);
    execFileSync(args[0], args.slice(1), opts);
}

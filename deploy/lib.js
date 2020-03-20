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

exports.buildRev = function buildRev() {
    try {
        const branch = execFileSync("git",
            [ "rev-parse", "--abbrev-ref", "HEAD" ], { cwd: rootDir })
            .toString().trim() || "?";
        const rev = execFileSync("git",
            [ "describe", "--long", "--tags" , "--dirty", "--always" ], { cwd: rootDir })
            .toString().trim() || "?";
        return `${branch}:${rev}`;

    } catch (err) {
        console.log(err);
        return "";
    }
}
const chalk = require('chalk');
const endent = require('endent');
const info = {
  exeName: "runner.js",
  version: "0.0.1"
};
const { DEFAULT_COMMAND } = require('./constants');

module.exports = {
  DEFAULT_COMMAND,
  version: () => info.version,

  help: commands => endent`
    Usage
      $ ${info.exeName} <command>

    Available commands [default: ${DEFAULT_COMMAND}]
      ${Object.keys(commands).join(', ')}

    Common Options
      --version       Version number
      --help, -h      Displays this message

    Commands
      ${Object.entries(commands)
        .map(
          ([command, { help }]) => endent`
            ${command}
              ${endent(help(info))}
          `
        )
        .join('\n')}
  `,

  exec: (args, commands, spinner) => {
    const command = args._[0] ? args._[0] : DEFAULT_COMMAND;
    const cliOptions = Object.entries(args)
      .filter(([arg]) => arg !== '_')
      .map(([arg, value]) => `${arg}=${value}`)
      .join(' ')
      .trim();
    spinner.info(
      `Command: ${chalk.bold(`${info.exeName} ${command}${cliOptions ? ` ${cliOptions}` : ''}`)}`
    );
    spinner.start(' ');
    if (!commands[command]) {
      console.error(`Invalid command: ${command}`);
      process.exit(1);
    }
    return commands[command].exec(args, info, spinner);
  },
};

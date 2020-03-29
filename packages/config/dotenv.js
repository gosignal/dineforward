const { accessSync, constants }= require('fs');

if (accessSync) {  // Not present in browser
  const dotenv = process.env.DOTENV;
  if (dotenv) {
    try {
      accessSync(dotenv, constants.F_OK | constants.R_OK);
    } catch (err) {
      throw new Error(`Unable to access env file '${dotenv}' specified by ` +
        `DOTENV environment variable. (cwd=${process.cwd()})`);
    }
    require('dotenv').config({ path: dotenv });
  }
}

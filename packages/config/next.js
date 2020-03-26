const { mkdirSync, readFileSync, writeFileSync } = require('fs');
const path = require('path');

const isBrowser = typeof window !== 'undefined';
let _buildEnv;

const prefix = '_BUILDENV_';
const storedBuildEnvFile = 'storedBuildEnv.json';

const loadStoredBuildEnv = (storeDir) => {
  if (!readFileSync) throw new Error(`Cannot load stored build env. No fs module`);
  let contents;
  const file = path.join(storeDir, storedBuildEnvFile);
  try {
    contents = readFileSync(file).toString();
  } catch (err) {
    if (err.code === 'EEXIST') {
      contents = '{}';
    } else throw err;
  }
  const stored = JSON.parse(contents);
  _buildEnv = stored;
  return stored;
}

if (isBrowser) {
  const getNextRuntime = require('next/config').default;
  const nextRuntime = getNextRuntime();
  _buildEnv = nextRuntime && nextRuntime.publicRuntimeConfig;
  if (!_buildEnv) throw new Error(`Unable to initialize next client-side runtime`);
}

const storedBuildEnvKey = key => `${prefix}${key}`;
const getStored = key => _buildEnv && _buildEnv[storedBuildEnvKey(key)];

/*
 * Fetchers
 */
const invalid = () => () => {
  throw new Error('Can only access the stored build environment during the client or server phase');
}
const storedBuildEnv = key => ({ phase }) => {
  if (phase !== 'client' && phase !== 'server') return invalid()();
  return getStored(key);
}

const createStoredBuildEnv = (origEnv, storeDir) => {
  if (!writeFileSync) throw new Error(`Cannot create stored build env. No fs module`);
  const storable = {};
  for (const [key, val] of Object.entries(origEnv)) {
    storable[storedBuildEnvKey(key)] = val;
  }
  try {
    mkdirSync(storeDir);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
  writeFileSync(path.join(storeDir, storedBuildEnvFile), JSON.stringify(storable));
  return storable;
}

module.exports = {
    createStoredBuildEnv,
    loadStoredBuildEnv,
    storedBuildEnv,
};

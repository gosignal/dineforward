const expand = require('expand-template')()
const framework = require('./next');

/*
 * Helpers
 */

const isProdLike = deployType => ['prod', 'stage', 'prodLike'].includes(deployType);
const isProd = deployType => deployType === 'prod';
const isBrowser = typeof window !== 'undefined';

const _envError = name => {
  const msg = `Required environment variable ${name} is not defined or empty.`;
  console.error(msg);
  throw new Error(msg);
};
const _envWarn = name => {
  console.warn(
    `WARNING: Environment variable ${name} is not defined ` +
      `or empty. Some functionality may be disabled.`,
  );
};

function substitute(template, vars) {
  template = expand(template, vars);
  // expand replaces only the keys present in vars, so remove any remaining
  // substitution expressions
  template = template.replace(/\{.*?\}/g, '');
  return template || undefined; // if zero len, return undefined instead.
}

/*
 * fetchers
 */

const invalid = () => () => {
  throw new Error('Invalid config definition fetcher for this phase');
};

const currentEnv = key => () => process.env[key];
const envError = name => () => _envError(name);
const envErrorProd = name => ({ deployType }) => {
  if (isProd(deployType)) _envError(name);
};
const envErrorProdLike = name => ({ deployType }) => {
  if (isProdLike(deployType)) _envError(name);
};
const envWarn = name => () => _envWarn(name);

const browser = f => () => {
  if (!isBrowser) throw new Error(`Cannot execute in non-browser environment`);
  return f();
};

const { storedBuildEnv } = framework;


const utils = {
  currentEnv,
  envError,
  envErrorProd,
  envErrorProdLike,
  envWarn,
  isBrowser,
  isProdLike,
  storedBuildEnv,
  browser,
};

const commonEnvFetchers = {
  envError,
  envErrorProd,
  envErrorProdLike,
  envWarn,
}

const fetcherMap = {
  dev: {
    ...commonEnvFetchers,
    browser: invalid,
    buildEnv: currentEnv,
    devEnv: currentEnv,
    serverEnv: currentEnv,
  },
  build: {
    ...commonEnvFetchers,
    browser: invalid,
    buildEnv: currentEnv,
    devEnv: invalid,
    serverEnv: invalid,
  },
  server: {
    ...commonEnvFetchers,
    browser: invalid,
    buildEnv: storedBuildEnv,
    devEnv: invalid,
    serverEnv: currentEnv,
  },
  client: {
    browser,
    buildEnv: storedBuildEnv,
    devEnv: invalid,
    envError: invalid,
    envErrorProd: invalid,
    envErrorProdLike: invalid,
    envWarn: invalid,
    serverEnv: invalid,
  },
};


const isFunction = v => typeof v === 'function';
const isFetcher = isFunction;
const isPlainObject = v => v && typeof v === 'object' && !Array.isArray(v);
const isString = v => typeof v === 'string';

/*
 * Turn the key definition into an array of primitives and fetchers for
 * the current phase.
 *
 * The definition for a key can be:
 * - A primitive value: Same constant value in all phases and deployTypes
 * - A fetcher: Evaluates to the same value in all phases and deployTypes
 * - An array of fetchers and primitives
 * - A map of phase names to any of the above
 */
function toDefList(keyDef, phase) {
  if (isPlainObject(keyDef)) keyDef = keyDef[phase];
  if (keyDef == null) return [];
  if (Array.isArray(keyDef)) return keyDef;
  return [keyDef];
}

function listKeys(configDef, phase) {
  return Object.entries(configDef).map(([key, keyDef]) => {
    if (isPlainObject(keyDef) && !keyDef[phase]) return false;
    if (Array.isArray(keyDef) && !keyDef.length) return false;
    return key;
  })
  .filter(Boolean);
}

function generateConfigDef(configDefFunc, phase) {
  if (!isFunction(configDefFunc)) throw new Error(`Invalid config definition. Definition must be a function`);
  if (!isString(phase)) throw new Error(`Phase must be a string (got ${phase})`);

  const fetchers = fetcherMap[phase];
  if (!fetchers) throw new Error(`'${phase}' is not a valid configuration phase`);
  return configDefFunc(fetchers);
}

function getConfig(configDefFunc, phase, deployType) {
  if (!isString(deployType)) throw new Error(`DeployType must be a string (got ${deployType})`);

  const configDef = generateConfigDef(configDefFunc, phase);
  const config = {};
  const errors = [];

  for (const [key, keyDef] of Object.entries(configDef)) {
    const keyDefList = toDefList(keyDef, phase);
    let val = undefined;
    for (const entry of keyDefList) {
      try {
        val = isFetcher(entry) ? entry({ phase, deployType }) : entry;
        if (typeof val === 'function') throw new Error(`Invalid definition. Fetcher returned a function`);
      } catch (err) {
        errors.push(`  ${key}: ${err.message}`);
        break;
      }

      if (val != null) {
        if (typeof val !== 'string') val = JSON.stringify(val);
        // Substitute using the already processed variables
        val = substitute(val, config);

        if (val != null) config[key] = val;
        break;
      }
    }
  }
  if (errors.length) {
    throw new Error(`Error getting config (${phase}/${deployType}) ` +
      `for these keys:\n${errors.join('\n')}`);
  }
  return config;
}

function createStoredBuildEnv(configDefFunc, storeDir, deployType, targetPhase = 'client') {
  if (!configDefFunc || !deployType) throw new Error(`Invalid null parameters to storableBuildConfig`);
  const orig = getConfig(configDefFunc, 'build', deployType);
  const targetKeys = listKeys(generateConfigDef(configDefFunc, targetPhase));

  const filtered = {};
  targetKeys.forEach(k => {
    if (k in orig) filtered[k] = orig[k];
  });

  return framework.createStoredBuildEnv(filtered, storeDir);
}

function getBuildConfig(configDefFunc, storeDir, currentPhase, deployType, targetPhase = 'client') {
  switch (currentPhase) {
    case 'build':
    case 'dev':
      return createStoredBuildEnv(configDefFunc, storeDir, deployType, targetPhase);
    case 'server':
      return framework.loadStoredBuildEnv(storeDir);
    default:
      throw new Error(`Cannot get build config in phase '${currentPhase}'`)
  }
}

module.exports = {
  getConfig,
  getBuildConfig,
  utils,
};

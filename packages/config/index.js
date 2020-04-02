const { getBuildConfig, getConfig, utils } = require('./multiConfig');

require('./dotenv');

/*
 * Set up the phase and deployType so we know which config to load by default.
 */
const defaultDev = process.env.NODE_ENV === 'development' ? 'dev' : undefined;
const dfPhase =
  (utils.isBrowser && 'client' || undefined) ||
  process.env.DF_PHASE ||
  defaultDev;
const dfDeployType =
  (utils.isBrowser && utils.storedBuildEnv('deployType')({ phase: dfPhase }) || undefined) ||
   process.env.DF_DEPLOY_TYPE ||
   defaultDev;

/*
 * The config definition for DineForward.org
 */

const localApiUrl = 'http://localhost:{keystoneListenPort}{apiPath}';

// Stuff that is sensitive and not needed during build or on client
const serverOnlyProdError = ({ devEnv, serverEnv, envErrorProdLike }, keys) => {
  const defs = {};
  keys.forEach(k => {
    defs[k] = {
      dev:    devEnv(k),
      server: [serverEnv(k), envErrorProdLike(k)],
      // Don't build it into webpack.
      // Not available on client or at build time.
    };
  });
  return defs;
};


// Stuff that is sensitive and needed during build
const noClientProdError = ({ buildEnv, devEnv, serverEnv, envErrorProdLike }, keys) => {
  const defs = {};
  keys.forEach(k => {
    defs[k] = {
      dev:    devEnv(k),
      build:  [buildEnv(k), envErrorProdLike(k)],
      server: [serverEnv(k), envErrorProdLike(k)],
      // Not available on client
    };
  });
  return defs;
};

const dfConfigDef = fetchers => {
  const { browser, buildEnv, devEnv, envErrorProd, envErrorProdLike, serverEnv } = fetchers;

  return {
    phase: dfPhase,
    deployType: dfDeployType,
    // Value with either be the string 'true' or undefined
    deployProdLike: utils.isProdLike(dfDeployType) || undefined,

    keystoneListenPort: {
      dev:    [devEnv('PORT'), 8000],
      build:  [buildEnv('PORT'), 8001],
      server: [serverEnv('PORT'), envErrorProdLike('PORT'), 8000],
      // Not available on client
    },
    webListenPort: '{keystoneListenPort}',

    // For sending to customers in emails that contain links, like reset
    // password emails.
    emailWebsiteLink: 'https://dineforward.org',

    // Additional website links based on emailWebsiteLink
    emailBusinessSignupLink: '{emailWebsiteLink}/business/signup',
    emailContactLink: '{emailWebsiteLink}/contact',
    emailLoginLink: '{emailWebsiteLink}/login',

    apiPath: '/admin/api',
    apiUrl: {
      dev: localApiUrl,
      build: localApiUrl,
      server: localApiUrl,
      client: browser(() => window.location.origin + '{apiPath}'),
    },

    // Stuff that is sensitive and not needed during build or on client
    ...serverOnlyProdError(fetchers, [
      'COOKIE_SECRET',
      'FACEBOOK_APP_ID',
      'FACEBOOK_APP_SECRET',
      'GOOGLE_CLIENT_ID',
      'GOOGLE_CLIENT_SECRET',
      'REDIS_HOST',
      'REDIS_DBNAME',
      'REDIS_PORT',
      'REDIS_PASSWORD',
      'SENDGRID_API_KEY',
      //'STRIPE_ACCOUNT_COUNTRY',
      //'STRIPE_PUBLISHABLE_KEY',
      //'STRIPE_SECRET_KEY',
      //'STRIPE_WEBHOOK_SECRET',
    ]),

    // Stuff that is sensitive and needed during build
    ...noClientProdError(fetchers, [
      'CLOUDINARY_CLOUD_NAME',
      'CLOUDINARY_KEY',
      'CLOUDINARY_SECRET',
      'GOOGLE_MAPS_KEY',
    ]),

    GA_TRACKING_ID: {
      dev:    [devEnv('GA_TRACKING_ID'), 'XXX-XXX-XXX'],
      build:  [buildEnv('GA_TRACKING_ID'), envErrorProd('GA_TRACKING_ID'), 'XXX-XXX-XXX'],
      server: [serverEnv('GA_TRACKING_ID'), envErrorProd('GA_TRACKING_ID'), 'XXX-XXX-XXX'],
      // Not available on client
    },
  };
};

const configCache = new Map();

/*
 * Functions to generate configs for different environments
 */

const getDfConfig = (phase = dfPhase, deployType = dfDeployType) => {
  if (!phase) throw new Error(`Phase must be supplied to getDfConfig or DF_PHASE must be set`);
  if (!deployType) throw new Error(`deployType must be supplied to getDfConfig or DF_DEPLOY_TYPE must be set`);

  const cacheKey = `${phase}:${deployType}`;
  const cached = configCache.get(cacheKey);
  if (cached) return cached;

  const config = getConfig(dfConfigDef, phase, deployType);
  configCache.set(cacheKey, config);
  return config;
}

const getDfBuildConfig = (storeDir, currentPhase = dfPhase, deployType = dfDeployType) => {
  if (!storeDir) throw new Error(`storeDir must be supplied to getDfBuildConfig`);
  if (!currentPhase) throw new Error(`currentPhase must be supplied to getDfBuildConfig or DF_PHASE must be set`);
  if (!deployType) throw new Error(`deployType must be supplied to getDfBuildConfig or DF_DEPLOY_TYPE must be set`);
  console.log(`Generating DineForward build config for ${currentPhase}/${deployType}`);
  return getBuildConfig(dfConfigDef, storeDir, currentPhase, deployType);
}

module.exports = {
  ...getDfConfig(),
  getConfig: getDfConfig,
  getBuildConfig: getDfBuildConfig,
  utils,
};

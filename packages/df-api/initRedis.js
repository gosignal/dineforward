const {
  REDIS_DBNAME,
  REDIS_HOST,
  REDIS_PASSWORD,
  REDIS_PORT,
} = require('@dineforward/config');

function initRedis(kConfig) {
  // NOTE: REDIS_XXX are not provided at build time
  if (!REDIS_HOST) return;

  const redis = require('redis');
  const session = require('express-session');

  const RedisStore = require('connect-redis')(session);

  const clientConfig = {
    host: REDIS_HOST,
  };

  if (REDIS_DBNAME) clientConfig.db = REDIS_DBNAME;
  if (REDIS_PORT) {
    const portNum = parseInt(REDIS_PORT, 10);
    if (isNaN(portNum)) throw new Error(`REDIS_PORT must be an integer`);
    clientConfig.port = portNum;
  }
  if (REDIS_PASSWORD) clientConfig.password = REDIS_PASSWORD;

  const client = redis.createClient(clientConfig);

  kConfig.sessionStore = new RedisStore({ client });
}

module.exports = {
  initRedis,
};

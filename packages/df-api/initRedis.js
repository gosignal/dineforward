module.exports = function initRedis(kConfig) {
  if (!process.env.REDIS_HOST || process.env.KEYSTONE_BUILD != null) return;

  const redis = require('redis');
  const session = require('express-session');

  const RedisStore = require('connect-redis')(session);

  const clientConfig = {
    host: process.env.REDIS_HOST,
  };

  if (process.env.REDIS_DBNAME) clientConfig.db = process.env.REDIS_DBNAME;
  if (process.env.REDIS_PORT) {
    const portNum = parseInt(process.env.REDIS_PORT, 10);
    if (isNaN(portNum)) throw new Error(`REDIS_PORT must be an integer`);
    clientConfig.port = portNum;
  }
  if (process.env.REDIS_PASSWORD) clientConfig.password = process.env.REDIS_PASSWORD;

  const client = redis.createClient(clientConfig);

  kConfig.sessionStore = new RedisStore({ client });
};

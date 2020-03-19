/* eslint-disable global-require */
require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { NextApp } = require('@keystonejs/app-next');
const initialiseData = require('./initial-data');
const { registerAppLists } = require('./schema');
const { useAuthStrategy } = require('./utils/accessControl');

const PROJECT_NAME = 'DineForward - Backend';

const keystoneConfig = {
  name: PROJECT_NAME,
  adapter: new MongooseAdapter(),
  onConnect: initialiseData,
};

function initRedis(kConfig) {
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
}

initRedis(keystoneConfig);

const keystone = new Keystone(keystoneConfig);

// instantiate our middleware
registerAppLists(keystone);

const authStrategy = useAuthStrategy(keystone);

// console.log(JSON.stringify(process.env));

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: false,
      authStrategy,
    }),
    new NextApp({ dir: '../df-client' }),
  ],
};

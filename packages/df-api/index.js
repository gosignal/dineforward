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
const { initRedis } = require('./initRedis');

const PROJECT_NAME = 'DineForward - Backend';

const keystoneConfig = {
  name: PROJECT_NAME,
  adapter: new MongooseAdapter(),
  onConnect: initialiseData,
};

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

/* eslint-disable no-console */
require('./initEnv');
const { Keystone } = require('@keystonejs/keystone');

const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('./utils/NextApp');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');

const initialiseData = require('./initial-data');
const { authStrategy } = require('./utils/accessControl');
const { initRedis } = require('./initRedis');

const { registerAppLists } = require('./schema');

const PROJECT_NAME = 'DineForward - Backend';
const keystoneConfig = {
  name: PROJECT_NAME,
  adapter: new MongooseAdapter(),
  onConnect: initialiseData,
  secureCookies: false,
};

initRedis(keystoneConfig);
const keystone = new Keystone(keystoneConfig);
registerAppLists(keystone);

// Work in progress
// const stripeApp = {
//   prepareMiddleware: ({ keystone }) => {
//     const app = express();
//     app.use(bodyParser.urlencoded({ extended: true }));
//     initRoutes(keystone, app);
//     return app;
//   },
// };

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      adminPath: '/admin',
      authStrategy: authStrategy(keystone),
      isAccessAllowed: ({ authentication: { item: user } }) => !!user && !!user.isAdmin,
      hooks: require.resolve('./admin/'),
    }),
    new NextApp({ dir: '../df-client' }),
  ],
  distDir: 'dist',
};

if (process.env.DF_BUILD_REV) {
  console.log(`Starting ${PROJECT_NAME} [${process.env.DF_BUILD_REV}]`);
}

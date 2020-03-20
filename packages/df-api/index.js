require('./initEnv');
const { Keystone } = require('@keystonejs/keystone');

const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');

const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');

const initialiseData = require('./initial-data');
const { useAuthStrategy } = require('./utils/accessControl');
const { initRedis } = require('./initRedis');

const { registerAppLists } = require('./schema');

const PROJECT_NAME = 'DineForward - Backend';
const keystoneConfig = {
  name: PROJECT_NAME,
  adapter: new MongooseAdapter(),
  onConnect: initialiseData,
};

initRedis(keystoneConfig);
const keystone = new Keystone(keystoneConfig);
registerAppLists(keystone);

const authStrategy = useAuthStrategy(keystone);

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
      enableDefaultRoute: false,
      authStrategy,
    }),
    new NextApp({ dir: '../df-client' }),
  ],
};

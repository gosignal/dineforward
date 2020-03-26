const { COOKIE_SECRET } = require('@dineforward/config');

const { Keystone } = require('@keystonejs/keystone');

const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('./utils/NextApp');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');

const initialiseData = require('./initial-data');
const { access } = require('./utils/accessControl');
const { authStrategy } = require('./utils/auth');
const { initRedis } = require('./initRedis');

const { registerAppLists } = require('./schema');

const PROJECT_NAME = 'DineForward - Backend';

const keystoneConfig = {
  appVersion: {
    addVersionToHttpHeaders: false,
    access: false,
  },
  name: PROJECT_NAME,
  adapter: new MongooseAdapter(),
  onConnect: initialiseData,
  secureCookies: false,
};

if (COOKIE_SECRET) keystoneConfig.cookieSecret = COOKIE_SECRET;

initRedis(keystoneConfig);
const keystone = new Keystone(keystoneConfig);
registerAppLists(keystone);
const strategies = authStrategy(keystone);

// Work in progress
// const stripeApp = {
//   prepareMiddleware: ({ keystone }) => {
//     const app = express();
//     app.use(bodyParser.urlencoded({ extended: true }));
//     initRoutes(keystone, app);
//     return app;
//   },
// };

if (process.env.DF_BUILD_REV) {
  console.log(`Starting ${PROJECT_NAME} [${process.env.DF_BUILD_REV}]`);
}

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      adminPath: '/admin',
      authStrategy: strategies.password,
      enableDefaultRoute: false,
      hooks: require.resolve('./admin/'),
      isAccessAllowed: access.userIsAdmin,
    }),
    new NextApp({ dir: '../df-client' }),
  ],
  distDir: 'dist',
  configureExpress: app => app.set('trust proxy', true),
};


const facebook = require('./facebook');
const google = require('./google');
const password = require('./password');

const getOAuthUrls = app => ({
  loginPath: `/auth/${app}`,
  callbackPath: `/auth/callback/${app}`,
  callbackURL: `${process.env.EXTERNAL_URL}/auth/callback/${app}`,
});

const isDevelopment = process.env.NODE_ENV !== 'production'

const authStrategy = ks => {
  const strategies = {};

  strategies.facebook = facebook(ks, getOAuthUrls('facebook'));
  strategies.google = google(ks, getOAuthUrls('google'));
  strategies.password = password(ks);
  return strategies;
}

module.exports = {
    authStrategy,
};

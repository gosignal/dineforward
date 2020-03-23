const facebook = require('./facebook');
const google = require('./google');
const password = require('./password');

const getOAuthUrls = app => {
  const callbackPath = `/auth/callback/${app}`;
  const loginPath = `/auth/${app}`;
  const callbackURL = `${process.env.EXTERNAL_URL}${callbackPath}`;

  return {
    callbackPath,
    loginPath,
    strategyConfig: {
      callbackURL,
    }
  };
};

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

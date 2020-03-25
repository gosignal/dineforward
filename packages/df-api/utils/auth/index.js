const { getCommonConfig } = require('./common');
const facebook = require('./facebook');
const google = require('./google');
const password = require('./password');

const authStrategy = ks => {
  const strategies = {};

  strategies.facebook = facebook(ks, getCommonConfig('facebook'));
  strategies.google = google(ks, getCommonConfig('google'));
  strategies.password = password(ks);
  return strategies;
}

module.exports = {
    authStrategy,
};

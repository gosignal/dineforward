const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require('@dineforward/config');
const { FacebookAuthStrategy } = require('@keystonejs/auth-passport');

const init = (ks, commonCfg) => {
  if (!FACEBOOK_APP_ID || !FACEBOOK_APP_SECRET) return;
  const config = {
    ...commonCfg,
    appId: FACEBOOK_APP_ID,
    appSecret: FACEBOOK_APP_SECRET,
    scope: [ 'public_profile', 'email' ],
    idField: 'facebookId',
  };
  config.strategyConfig = {
    ...config.strategyConfig,
    profileFields: ['id', 'displayName', 'photos', 'email'],
  }
  return ks.createAuthStrategy({
    type: FacebookAuthStrategy,
    list: 'User',
    config,
  });
}

module.exports = init;

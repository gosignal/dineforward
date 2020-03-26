const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require('@dineforward/config');
const { FacebookAuthStrategy } = require('@keystonejs/auth-passport');

const init = (ks, commonCfg) => {
  if (!FACEBOOK_APP_ID || !FACEBOOK_APP_SECRET) return;
  return ks.createAuthStrategy({
    type: FacebookAuthStrategy,
    list: 'User',
    config: {
      ...commonCfg,
      appId: FACEBOOK_APP_ID,
      appSecret: FACEBOOK_APP_SECRET,
      scope: [ 'public_profile', 'email' ],
      idField: 'facebookId',
    },
  });
}

module.exports = init;

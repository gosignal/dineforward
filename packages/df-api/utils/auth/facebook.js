const { envAssertProd } = require('../../env');
const { FacebookAuthStrategy } = require('@keystonejs/auth-passport');

const init = (ks, commonCfg) =>
  envAssertProd([ 'FACEBOOK_APP_ID', 'FACEBOOK_APP_SECRET' ], e =>
    ks.createAuthStrategy({
      type: FacebookAuthStrategy,
      list: 'User',
      config: {
        ...commonCfg,
        appId: e.FACEBOOK_APP_ID,
        appSecret: e.FACEBOOK_APP_SECRET,
        scope: [ 'public_profile', 'email' ],
        idField: 'facebookId',
      },
    })
  );

module.exports = init;

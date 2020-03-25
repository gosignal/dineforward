const { envAssertProd } = require('../../env');
const { GoogleAuthStrategy } = require('@keystonejs/auth-passport');

const init = (ks, commonCfg) => 
  envAssertProd([ 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET' ], e => 
    ks.createAuthStrategy({
      type: GoogleAuthStrategy,
      list: 'User',
      config: {
        ...commonCfg,
        idField: 'googleId',
        appId: e.GOOGLE_CLIENT_ID,
        appSecret: e.GOOGLE_CLIENT_SECRET,
      },
    })
  );

module.exports = init;

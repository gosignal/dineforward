const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('@dineforward/config');
const { GoogleAuthStrategy } = require('@keystonejs/auth-passport');

const init = (ks, commonCfg) => {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) return;
  return ks.createAuthStrategy({
    type: GoogleAuthStrategy,
    list: 'User',
    config: {
      ...commonCfg,
      idField: 'googleId',
      appId: GOOGLE_CLIENT_ID,
      appSecret: GOOGLE_CLIENT_SECRET,
    },
  });
};

module.exports = init;

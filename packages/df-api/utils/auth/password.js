const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const init = (ks, _commonCfg) => ks.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = init;

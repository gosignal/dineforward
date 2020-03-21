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

        // Once a user is found/created and successfully matched to the
        // googleId, they are authenticated, and the token is returned here.
        // NOTE: By default KeystoneJS sets a `keystone.sid` which authenticates the
        // user for the API domain. If you want to authenticate via another domain,
        // you must pass the `token` as a Bearer Token to GraphQL requests.
        onAuthenticated: ({ token, item, isNewItem }, req, res) => {
          res.redirect('/');
        },

        // If there was an error during any of the authentication flow, this
        // callback is executed
        onError: (error, req, res) => {
          console.error("Google Auth Error", error[0], error[0].locations);
          res.redirect('/?error=Uh-oh');
        },

        resolveCreateData: ({ createData, serviceProfile }, req, res) => {
          if (!serviceProfile) throw new Error(`Google auth returned null serviceProfile`);
          const email =
            serviceProfile.emails &&
            serviceProfile.emails[0] &&
            serviceProfile.emails[0].value;
          if (!email) throw new Error(`Google auth did not supply an email`);

          return {
            name: serviceProfile.displayName,
            email,
            username: email,
          };
        }
      },
    })
  );

module.exports = init;

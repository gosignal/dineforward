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
          console.error("Facebook Auth Error", error);
          res.redirect('/?error=Uh-oh');
        },

        resolveCreateData: ({ createData, serviceProfile }, req, res) => {
          if (!serviceProfile) throw new Error(`Facebook auth returned null serviceProfile`);
          const email =
            serviceProfile.emails &&
            serviceProfile.emails[0] &&
            serviceProfile.emails[0].value;
          if (!email) throw new Error(`Facebook auth did not supply an email`);

          const name = serviceProfile.displayName ||
            [ serviceProfile.name.givenName, serviceProfile.name.familyName ].filter(Boolean).join(" ") ||
            "New User";

          return {
            name,
            email,
            username: email,
          };
        }
      },
    })
  );

module.exports = init;

const loginStateKeys = [ 'onsuccess', 'onfailure', 'operation' ];
const operations = [ 'create', 'validate' ];
const LOGIN_STATE_SESSION_KEY = 'loginState';

function extractLoginState(source, sourceName) {
  const missing = loginStateKeys.filter(k => !source[k]);
  if (missing.length) throw new Error(`Missing ${sourceName}: ${missing.join(', ')}\n`);

  const state = {};
  loginStateKeys.forEach(k => state[k] = source[k]);
  if (!operations.includes(state.operation)) {
    throw new Error(`Invalid operation type '${state.operation}'`)
  }

  return state;
}

function getLoginState(req) {
  if (!req) throw new Error(`Internal error: Invalid req object getting login state`);
  const s = req[LOGIN_STATE_SESSION_KEY];
  if (!s) throw new Error(`Internal error: No login state present in req object`);
  return s;
}

function errorRedirect(message, req, res) {
  const state = getLoginState(req);
  if (state.errorSent) return;
  state.errorSent = true;
  res.redirect(getLoginState(req).onfailure.replace('${message}', message));
}

function loginPathMiddleware(req, res, next) {
  let state;
  try {
    state = extractLoginState(req.query, 'query parameters');
  } catch (e) {
    res.status(400).send(`Invalid login request. ${e.message || e}`);
    return;
  }

  req.session[LOGIN_STATE_SESSION_KEY] = state;
  next();
}

function callbackPathMiddleware(req, res, next) {
  let state = req.session[LOGIN_STATE_SESSION_KEY];
  try {
    if (!state) throw new Error(`No login session state`);
    state = extractLoginState(state, 'login state properties');
  } catch (e) {
    res.status(500).send(`Internal error with login state: ${e.message || e}`);
    return;
  }
  req[LOGIN_STATE_SESSION_KEY] = state;
  next();
}

// Once a user is found/created and successfully matched to the
// googleId, they are authenticated, and the token is returned here.
// NOTE: By default KeystoneJS sets a `keystone.sid` which authenticates the
// user for the API domain. If you want to authenticate via another domain,
// you must pass the `token` as a Bearer Token to GraphQL requests.
function onAuthenticated({ token, item, isNewItem }, req, res, next) {
  res.redirect(getLoginState(req).onsuccess);
}


// If there was an error during any of the authentication flow, this
// callback is executed
function onError(error, req, res) {
  console.error("Error during user authentication", error);
  const message = error.message || error.toString();
  errorRedirect(message, req, res);
}

function resolveCreateData({ createData, serviceProfile }, req, res) {
  if (!serviceProfile) throw new Error(`External auth returned null serviceProfile`);
  const email =
    serviceProfile.emails &&
    serviceProfile.emails[0] &&
    serviceProfile.emails[0].value;
  if (!email) {
    const msg = `Cannot create new user. External auth did not supply an email.`;
    errorRedirect(msg, req, res);
    console.error(msg + 'Response: ' + JSON.stringify(serviceProfile, null, 2));
    return;
  }

  const name = serviceProfile.displayName ||
    [ serviceProfile.name.givenName, serviceProfile.name.familyName ].filter(Boolean).join(" ") ||
    "New User";

  return {
    name,
    email,
    username: email,
  };
}

const getCommonConfig = app => {
  const callbackPath = `/auth/callback/${app}`;
  const loginPath = `/auth/${app}`;
  const callbackURL = `${process.env.EXTERNAL_URL}${callbackPath}`;

  return {
    callbackPath,
    loginPath,
    loginPathMiddleware,
    callbackPathMiddleware,
    onAuthenticated,
    onError,
    resolveCreateData,
    strategyConfig: {
      callbackURL,
    }
  };
};

module.exports = {
    getCommonConfig,
};

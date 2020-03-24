require('./initEnv');

const isProduction = process.env.NODE_ENV === 'production';

function envAssert(names) {
  names.forEach(n => {
    if (!process.env[n]) {
      throw new Error(`Required environment variable ${n} is not defined or empty`);
    }
  });
}

function envOptional(names, cb, opts = {}) {
  const env = process.env;
  let ok = true;

  for (const n of names) {
    if (!env[n]) {
      if (!opts.warn) return;
      ok = false;
      console.warn(
        `WARNING: Environment variable ${n} is not defined ` +
          `or empty. Some functionality may be disabled.`,
      );
    }
  }
  if (ok && cb) return cb(env);
}

function envAssertProd(names, cb) {
  if (isProduction) {
    envAssert(names);
    if (cb) return cb(process.env);
  } else {
    return envOptional(names, cb, { warn: true });
  }
}

module.exports = {
  envAssert,
  envAssertProd,
  envOptional,
};

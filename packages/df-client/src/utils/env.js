require('./initEnv');

const isProduction = process.env.NODE_ENV === 'production';

export function envAssert(names) {
  names.forEach(n => {
    if (!process.env[n]) {
      throw new Error(`Required environment variable ${n} is not defined or empty`);
    }
  });
}

export function envOptional(names, cb, opts = {}) {
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
  if (ok && cb) cb(env);
}

export function envAssertProd(names, cb) {
  if (isProduction) {
    envAssert(names);
    if (cb) cb(process.env);
  } else {
    envOptional(names, cb, { warn: true });
  }
}

const config = {
  BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE,
  NODE_ENV: process.env.NODE_ENV,
  CUSTOM_ENV: process.env.CUSTOM_ENV,
  IS_PROD: process.env.NODE_ENV === 'production',
};

module.exports = config;
    
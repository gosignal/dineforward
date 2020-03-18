

/**
 * Config
 * Import
 */
module.exports = {
  name: 'DineForward - Global Config',
  version: '0.0.1',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  jwt: {
    secret: process.env.JWT_SECRET || 'asdasdasdasd123123123123123asdasdasd',
  },
  db: {
    name: 'dineforward-development',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN || '',
  },
  stream: {
    appId: process.env.STREAM_APP_ID,
    key: process.env.STREAM_KEY,
    secret: process.env.STREAM_SECRET,
  },
  algolia: {
    appId: process.env.ALGOLIA_APP_ID || '',
    searchOnlyKey: process.env.ALGOLIA_SEARCH_ONLY_KEY || '',
    apiKey: process.env.ALGOLIA_API_KEY || '',
  },
};

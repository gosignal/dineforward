/* eslint-disable no-param-reassign */
require('./src/utils/initEnv');

const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');
const optimizedImages = require('next-optimized-images');

const withConfig = nextRuntimeDotenv({ public: ['API_URL', 'API_KEY'] });

// const path = require('path');
// const glob = require('glob');

const nextConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  env: {
    API_URL: process.env.API_URL,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
  serverRuntimeConfig: {
    serverApiUrl: process.env.API_URL,
  }
};
const withImagesOptimized = [
  optimizedImages,
  {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  },
];

module.exports = withConfig(
  withPlugins(
    [
      [
        withTM,
        {
          transpileModules: ['reusecore', 'common'],
        },
      ],
      [withFonts],
      [withCSS],
      [withImagesOptimized],
      [withBundleAnalyzer],
    ],
    nextConfig,
  ),
);

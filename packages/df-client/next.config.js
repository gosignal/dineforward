/* eslint-disable no-param-reassign */
const { apiUrl, getBuildConfig } = require('@dineforward/config');
const path = require('path');

const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const optimizedImages = require('next-optimized-images');

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
    API_URL: apiUrl,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },

  webpack: (config, { isServer }) => {
    // For certain node modules, return empty on client
    if (!isServer) {
      config.node = {
        ...config.node,
        fs: 'empty',
      };
    }
    return config
  },
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

const withConfig = (nextConfig = {}, composePlugins = {}) => {
  const nextDist = path.resolve(__dirname, nextConfig.distDir);
  const buildConfig = getBuildConfig(nextDist);

  nextConfig.publicRuntimeConfig = {
    ...(nextConfig.publicRuntimeConfig || {}),
    ...buildConfig,
  };
  return nextConfig;
};

module.exports = withPlugins(
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
    [withConfig, { configDir: __dirname }],
  ],
  nextConfig,
);

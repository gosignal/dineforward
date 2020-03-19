const path = require('path');

const abs = d => path.resolve(__dirname, d);

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: [abs('.')],
        alias: {
          '~config': abs('./config'),
          '~components': abs('./src/components'),
          '~assets': abs('./src/theme/assets'),
          '~theme': abs('./src/theme'),
          '~utils': abs('./src/utils'),
        },
      },
    ],
  ],
};

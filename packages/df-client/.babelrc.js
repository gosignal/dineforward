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
          '~config': abs('config'),
          '~views': abs('src/views'),
          '~components': abs('src/views/components'),
          '~assets': abs('src/views/theme/assets'),
          '~theme': abs('src/views/theme'),
          '~containers': abs('src/views/containers'),
          '~utils': abs('src/utils'),
          '~hooks': abs('src/utils/hooks'),
          '~ctx': abs('src/utils/contexts'),
          '~gen': abs('src/__generated'),
          '~gql': abs('src/graphql'),
          '~types': abs('interfaces'),
        },
      },
    ],
    ['styled-components', { ssr: true }],
  ],
};

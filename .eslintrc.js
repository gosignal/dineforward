const confusingBrowserGlobals = require('confusing-browser-globals');
const path = require('path');

module.exports = {
  root: true, // So parent files don't get applied
  globals: {
    preval: false, // Used in the documentation
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['plugin:import/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  plugins: ['babel', 'mocha'], // 'react-hooks'
  rules: {
    'consistent-this': ['error', 'self'],
    'linebreak-style': 'off', // Doesn't play nicely with Windows
    // just as bad as "max components per file"
    'no-alert': 'error',
    // Strict, airbnb is using warn; allow warn and error for dev environments
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-constant-condition': 'error',
    // Airbnb use error
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'nonblock-statement-body-position': 'error',
    // Airbnb restricts isNaN and isFinite which are necessary for IE 11
    // we have to be disciplined about the usage and ensure the Number type for its
    // arguments
    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),
    'no-underscore-dangle': ['error', { allow: ['_rewriteUrlForNextExport'] }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-destructuring': 'off', // Destructuring harm grep potential.

    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off', // deprecated
    'jsx-a11y/no-autofocus': 'off', // We are a library, people do what they want.

    // This rule is great for raising people awareness of what a key is and how it works.
    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'off',
    // It's buggy
    'react/forbid-prop-types': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-handler-names': [
      'error',
      {
        // airbnb is disabling this rule
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    // not a good rule for components close to the DOM
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'error',
    // Strict, airbnb is using off
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'off',
    'react/no-multi-comp': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'warn',
    // stylistic opinion. For conditional assignment we want it outside, otherwise as static
    'react/static-property-placement': 'off',

    'import/no-extraneous-dependencies': 'off', // It would be better to enable this rule.
    'import/namespace': ['error', { allowComputed: true }],
    'import/order': [
      'error',
      {
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
      },
    ],
    'import/extensions': ['never'],

    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': ['error', { additionalHooks: 'useEnhancedEffect' }],
  },
};

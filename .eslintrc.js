module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'import',
    'react-native',
  ],
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    camelcase: 'off',
    'no-use-before-define': ['error', { variables: false, functions: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 2,
    'no-console': 1,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/no-string-refs': 1,
    'react/no-deprecated': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'react/sort-comp': 0,
    'brace-style': [
      'error',
      'stroustrup',
      {
        allowSingleLine: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'object-shorthand': [
      'error',
      'consistent',
    ],
    'max-len': 1,
    'react/require-extension': 0,
    'array-callback-return': 0,
    'react/jsx-props-no-spreading': 0,
    'consistent-return': 0,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    radix: 0,
  },
  globals: {
    require: true,
    global: true,
    module: true,
    expect: true,
    jest: true,
    it: true,
    Promise: true,
  },
};

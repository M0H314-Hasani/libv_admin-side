/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'max-len': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'dot-notation': [
      'error',
      { allowPattern: '^[A-Za-z0-9]+(_[A-Za-z0-9]+)+$' },
    ],
    'prefer-destructuring': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
  },
  globals: {
    $router: true,
    $trans: true,
  },
};

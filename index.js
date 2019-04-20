module.exports = {
  root: true,

  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  globals: {
    'wx': true,
    'App': true,
    'Page': true,
    'Component': true,
    'getApp': true,
    'getCurrentPages': true,
    'getRegExp': true,
    'getDate': true,
    'Behavior': true
  },

  plugins: ['import'],

  settings: {
    'import/extensions': ['.js']
  },

  rules: {
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'error',
    'import/default': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-amd': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/no-useless-path-segments': 'error',
  },
};

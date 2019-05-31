module.exports = {
  root: true,

  extends: ['airbnb-base'],

  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
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
};

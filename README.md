# eslint-config-mp

[![npm](https://img.shields.io/npm/v/eslint-config-mp.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-mp)
[![GitHub issues](https://img.shields.io/github/issues/mp-components/eslint-config-mp.svg?style=flat-square)](https://github.com/mp-components/eslint-config-mp/issues)
[![GitHub](https://img.shields.io/github/license/mp-components/eslint-config-mp.svg?style=flat-square)](https://github.com/mp-components/eslint-config-mp/blob/master/LICENSE)

ESLint configuration for WeChat Mini Program

## 安装

```bash
yarn add eslint-config-mp eslint-config-airbnb-base eslint eslint-plugin-import --dev
# 或
npm install eslint-config-mp eslint-config-airbnb-base eslint eslint-plugin-import --save-dev
```

## 使用

在项目根目录下创建 `.eslintrc` 文件：

```json
{
  "extends": "mp"
}
```

> 请使用 ES6+ 语法，并打开微信开发者工具的 “ES6 转 ES5” 功能

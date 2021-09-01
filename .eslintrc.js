module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    process: true,
    wx: true,
    jWeixin: true,
    mqq: true,
    QZAppExternal: true,
  },
  rules: {}
};

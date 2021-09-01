const vConsolePlugin = require("vconsole-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function () {
  let plugins = [];
  if (process.env.VUE_APP_ENV != 'prod') {
    plugins.push(new vConsolePlugin({
      enable: true
    }))
  }

  if (process.env.VUE_APP_ENV === 'test') {
    plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }))
  }
  return plugins;
}

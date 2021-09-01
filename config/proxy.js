// vue 请求代理

module.exports = {
  "/api": {
    target: "",
    changeOrigin: true,
    logLevel: 'debug'
  }
}

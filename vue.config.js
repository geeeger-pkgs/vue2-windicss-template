// vue.config.js
const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const externals = require('./config/externals')

const cdn = externals.getCdnList()

function multiPageEntryCreator(name, title) {
  return {
    entry: `src/pages/${name}/main.js`,
    title,
    filename: `${_.kebabCase(name)}.html`,
    cdn
  }
}

function getPageName() {
  return fs.readdirSync(`src/pages`)
}

function getPageTitle(p) {
  try {
    return require(`./src/pages/${p}/config.json`).title
  } catch (e) {
    // empty
  }

  return ''
}

const reducer = (acc, c) => ({
  ...acc,
  [_.kebabCase(c.name)]: multiPageEntryCreator(c.name, c.title),
});

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC,

  productionSourceMap: process.env.VUE_APP_ENV !== 'prod',

  pages: getPageName().map(name => ({
    name,
    title: getPageTitle(name)
  })).reduce(reducer, {}),

  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    proxy: require('./config/proxy')
  },

  configureWebpack: {
    resolve: {
      alias: Object.assign(
        {
          '@': path.resolve(__dirname, 'src/')
        }
      )
    },
    plugins: require('./config/plugins')(),
    externals: externals.getNameMap()
  },

  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
}

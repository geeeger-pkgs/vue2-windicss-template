const cdnMap = {
  vue: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js',
  'vue-router': 'https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.min.js',
  'vuex': 'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js',
  axios: 'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js'
}

const nameMap = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  axios: 'axios'
}

module.exports = {
  getNameMap() {
    return process.env.VUE_APP_ENV === 'prod' ? nameMap : {}
  },
  getCdnList() {
    if (process.env.VUE_APP_ENV === 'prod') {
      return Object.keys(nameMap)
        .map(key => {
          return cdnMap[key]
        })
        .filter(identity => Boolean(identity))
    }
    return []
  }
}

const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, 'data/')
      }
    }
  }
}

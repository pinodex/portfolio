const path = require('path')

module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '~bulma/sass/utilities/_all.sass';
          @import '@/assets/scss/_variables.scss';
          @import '@/assets/scss/_mixins.scss';
        `
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, 'data/')
      }
    }
  },

  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}

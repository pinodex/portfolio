const path = require('path')

module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '~bulma/sass/utilities/initial-variables.sass';
          @import '~bulma/sass/utilities/mixins.sass';
          @import '@/assets/scss/_variables.scss';
          @import '@/assets/scss/_mixins.scss';
        `
      }
    },

    extract: {
      filename: 'assets/css/[name].css',
      chunkFilename: 'assets/css/[name].css',
    }
  },

  configureWebpack: {
    output: {
      filename: 'assets/js/[name].js',
      chunkFilename: 'assets/js/[name].js',
    },

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

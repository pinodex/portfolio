const path = require('path');
const { site } = require('./src/config');

module.exports = {
  productionSourceMap: false,

  assetsDir: 'assets/',

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/assets/sass/_variables.sass'
          @import '@/assets/sass/_mixins.sass'
        `,
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, 'data/'),
      },
    },
  },

  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const newArgs = [...args];

        newArgs[0].SITE_TITLE = site.title;
        newArgs[0].SITE_DESCRIPTION = site.description;
        newArgs[0].SITE_URL = site.url;

        return newArgs;
      });

    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      });

    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader');
  },
};

const path = require('path');
const { DefinePlugin } = require('webpack');
const { site } = require('./src/config');

module.exports = {
  productionSourceMap: false,

  assetsDir: 'assets/',

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/assets/scss/_variables.scss';
          @import '@/assets/scss/_mixins.scss';
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
        args[0].SITE_TITLE = site.title;
        args[0].SITE_DESCRIPTION = site.description;
        args[0].SITE_URL = site.url;

        return args;
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

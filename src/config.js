module.exports = {
  site: {
    title: process.env.VUE_APP_SITE_TITLE,
    description: process.env.VUE_APP_SITE_DESCRIPTION,
    url: process.env.VUE_APP_SITE_URL
  },

  feed: {
    author: {
      name: process.env.VUE_APP_FEED_AUTHOR_NAME,
      email: process.env.VUE_APP_FEED_AUTHOR_EMAIL,
      link: process.env.VUE_APP_FEED_AUTHOR_LINK
    }
  },

  googleAnalyticsId: process.env.VUE_APP_GA_CODE
}

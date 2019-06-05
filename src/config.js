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

  blog: {
    url: process.env.VUE_APP_BLOG_URL,
    apiBase: process.env.VUE_APP_BLOG_API_BASE,
    clientId: process.env.VUE_APP_BLOG_CLIENT_ID,
    clientSecret: process.env.VUE_APP_BLOG_CLIENT_SECRET
  },

  googleAnalyticsId: process.env.VUE_APP_GA_CODE
}

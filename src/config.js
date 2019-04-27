module.exports = {
  siteUrl: process.env.VUE_APP_SITE_URL,

  blog: {
    url: process.env.VUE_APP_BLOG_URL,
    apiBase: process.env.VUE_APP_BLOG_API_BASE,
    clientId: process.env.VUE_APP_BLOG_CLIENT_ID,
    clientSecret: process.env.VUE_APP_BLOG_CLIENT_SECRET
  },

  googleAnalyticsId: process.env.VUE_APP_GA_CODE
}

import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import VueAnalytics from 'vue-analytics'

import App from './App.vue'

import PreloadedImage from './components/Commons/PreloadedImage.vue'
import MockupMedia from './components/Commons/Mockup/Media.vue'
import Browser from './components/Commons/Mockup/Browser.vue'
import Screen from './components/Commons/Mockup/Screen.vue'

import { googleAnalyticsId } from './config'

import router from './router'
import services from './services'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production' && !Boolean(window.localStorage.noTracking)) {
  Vue.use(VueAnalytics, {
    id: googleAnalyticsId,
    router
  })
}

Vue.use(VueCarousel)

Vue.component('PreloadedImage', PreloadedImage)
Vue.component('MockupMedia', MockupMedia)
Vue.component('Browser', Browser)
Vue.component('Screen', Screen)

Vue.mixin({
  methods: {
    setPageTitle (title) {
      document.title = title ? `${title} - Raphael Marco` : 'Raphael Marco'
    }
  }
})

new Vue({
  router,
  provide: services,
  render: h => h(App),
  el: '#app'
})

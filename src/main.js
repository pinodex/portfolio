import Vue from 'vue'

import App from './App.vue'

import PreloadedImage from './components/Commons/PreloadedImage.vue'
import Browser from './components/Commons/Mockup/Browser.vue'
import Screen from './components/Commons/Mockup/Screen.vue'

import router from './router'
import services from './services'

Vue.config.productionTip = false

Vue.component('PreloadedImage', PreloadedImage)
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

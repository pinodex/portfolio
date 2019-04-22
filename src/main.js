import Vue from 'vue'

import App from './App.vue'

import router from './router'
import services from './services'

Vue.config.productionTip = false

new Vue({
  router,
  provide: services,
  render: h => h(App),
  el: '#app'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

import App from './App'
import Browser from './components/Browser'

import router from './router'
import services from './services'

import 'bulma'

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#607d8b',
  failedColor: 'red',
  height: '1px'
})

Vue.component('Browser', Browser)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

  provide: services,
})

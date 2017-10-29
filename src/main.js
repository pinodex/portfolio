// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'es6-promise/auto'

import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import VueAnalytics from 'vue-analytics'

import App from './App'
import Browser from './components/Browser'
import Screen from './components/Screen'

import router from './router'
import services from './services'

import 'bulma'

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#607d8b',
  failedColor: 'red',
  height: '1px'
})

Vue.use(VueAnalytics, {
  id: __GA_CODE__, router
})

Vue.component('Browser', Browser)
Vue.component('Screen', Screen)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

  provide: services,

  methods: {
    setTitle (text) {
      document.title = `${text} - Raphael Marco`
    }
  }
})

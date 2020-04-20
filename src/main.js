import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import SimpleAnalytics from 'simple-analytics-vue';

import App from './App.vue';

import PreloadedImage from './components/Commons/PreloadedImage.vue';
import MockupMedia from './components/Commons/Mockup/Media.vue';
import Browser from './components/Commons/Mockup/Browser.vue';
import Screen from './components/Commons/Mockup/Screen.vue';

import { simpleAnalyticsDomain } from './config';

import router from './router';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'production' && !window.localStorage.noTracking) {
  Vue.use(SimpleAnalytics, {
    domain: simpleAnalyticsDomain,
  });
}

Vue.use(VueCarousel);

Vue.component('PreloadedImage', PreloadedImage);
Vue.component('MockupMedia', MockupMedia);
Vue.component('Browser', Browser);
Vue.component('Screen', Screen);

Vue.mixin({
  methods: {
    setPageTitle(title) {
      document.title = title ? `${title} - Raphael Marco` : 'Raphael Marco';
    },
  },
});

export default new Vue({
  router,
  render: h => h(App),
  el: '#app',
});

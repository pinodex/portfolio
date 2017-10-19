import Vue from 'vue'
import Router from 'vue-router'

const pages = {
  Index: () => import('@/pages/Index')
}

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: pages.Index }
  ]
})

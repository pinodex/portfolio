import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('@/pages/Home'),
      meta: {
        isNavbarCollapsible: true
      }
    },

    {
      name: 'story',
      path: '/story',
      component: () => import('@/pages/Story'),
      meta: {
        isNavbarBrandVisible: true
      }
    },

    {
      name: 'projects',
      path: '/projects',
      component: () => import('@/pages/Projects/Index'),
      meta: {
        isNavbarBrandVisible: true
      }
    },

    {
      name: 'projects.view',
      path: '/projects/:slug',
      component: () => import('@/pages/Projects/View'),
      meta: {
        isNavbarBrandVisible: true
      }
    },

    {
      path: '/works',
      redirect: '/projects'
    },

    {
      path: '/works/:slug',
      redirect: '/projects/:slug'
    },

    {
      name: 'labs',
      path: '/labs',
      component: () => import('@/pages/Labs/Index'),
      meta: {
        isNavbarBrandVisible: true
      }
    },

    {
      name: 'labs.view',
      path: '/labs/:slug',
      component: () => import('@/pages/Labs/View'),
      meta: {
        isNavbarBrandVisible: true
      }
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return new Promise((resolve, reject) => {
      let scrollDuration = 500,
          cosParameter = window.scrollY / 2,
          oldTimestamp = performance.now(),
          scrollCount = 0

      function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))

        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0)
        }

        if (window.scrollY === 0) {
          resolve({ x: 0, y: 0 })

          return
        }

        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))

        oldTimestamp = newTimestamp

        window.requestAnimationFrame(step)
      }

      window.requestAnimationFrame(step);
    })
  }
})

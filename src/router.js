import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '@/pages/Errors/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('@/pages/Home.vue'),
      meta: {
        isNavbarCollapsible: true,
      },
    },

    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/About.vue'),
      meta: {
        isNavbarBrandVisible: true,
      },
    },

    {
      path: '/story',
      redirect: '/about',
    },

    {
      name: 'projects',
      path: '/projects',
      component: () => import('@/pages/Projects/Index.vue'),
      meta: {
        isNavbarBrandVisible: true,
      },
    },

    {
      name: 'projects.view',
      path: '/projects/:slug',
      component: () => import('@/pages/Projects/View.vue'),
      meta: {
        isNavbarBrandVisible: true,
      },
    },

    {
      path: '/works',
      redirect: '/projects',
    },

    {
      path: '/works/:slug',
      redirect: '/projects/:slug',
    },

    {
      name: 'labs',
      path: '/labs',
      component: () => import('@/pages/Labs/Index.vue'),
      meta: {
        isNavbarBrandVisible: true,
      },
    },

    {
      name: 'labs.view',
      path: '/labs/:slug',
      component: () => import('@/pages/Labs/View.vue'),
      meta: {
        isNavbarBrandVisible: true,
      },
    },

    {
      name: 'privacyPolicy',
      path: '/privacy-policy',
      component: () => import('@/pages/PrivacyPolicy.vue'),
      meta: {
        isNavbarBrandVisible: true,
      },
    },

    {
      name: 'contact',
      path: '/contact',
      component: () => import('@/pages/Contact.vue'),
      meta: {
        isNavbarBrandVisible: true,
      },
    },

    {
      path: '*',
      component: NotFound,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return new Promise((resolve) => {
      const scrollDuration = 500;
      const cosParameter = window.scrollY / 2;
      let oldTimestamp = performance.now();
      let scrollCount = 0;

      function step(newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));

        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0);
        }

        if (window.scrollY === 0) {
          resolve({ x: 0, y: 0 });

          return;
        }

        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));

        oldTimestamp = newTimestamp;

        window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);
    });
  },
});

<template>
  <nav class="navbar has-shadow" :class="{
    'is-fixed': fixed,
    'is-transparent': transparent,
    'is-blue': blue
  }">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <strong>Raph</strong>
        </router-link>

        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" v-for="link in links"
            :class="{'is-active': link.key == $route.name}"
            :key="link.key"
            :to="link.url">

            {{ link.text }}
          </router-link>
        </div>

        <div class="navbar-end">
          <a href="https://blog.raphaelmarco.com" class="navbar-item">Blog</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      fixed: {
        type: Boolean,
        default: false
      },

      transparent: {
        type: Boolean,
        default: false
      },

      blue: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        links: [
          { key: 'index', url: '/', text: 'Home' },
          { key: 'works', url: '/works', text: 'Works' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9em;

    .navbar-item {
      color: #333;
    }

    &.is-fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
    }

    &.is-blue {
      background: #263238 !important;
      box-shadow: none;

      .navbar-item {
        color: #f1f1f1;
      }
    }

    &.is-transparent {
      background: transparent;
      box-shadow: none;

      .navbar-item {
        color: #f1f1f1;
      }
    }
  }
</style>

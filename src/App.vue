<template>
  <div id="app" :class="{ 'has-navbar-offset': $route.name != 'index' }">
    <Navbar
      :transparent="$route.name == 'index'"
      :blue="scrolledPastHero"
      :fixed="true"></Navbar>

    <router-view></router-view>

    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    components: { Navbar },

    data () {
      return {
        scrolledPastHero: false
      }
    },

    created () {
      window.addEventListener('scroll', () => {
        this.scrolledPastHero = this.$route.name == 'index' &&
          window.scrollY >= window.innerHeight - 60
      })
    }
  }
</script>

<style>
  body {
    color: #263238;
  }

  .has-navbar-offset {
    margin-top: 52px;
  }

  .has-contents-below {
    margin-bottom: 1rem;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 500ms ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

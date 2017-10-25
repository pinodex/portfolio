<template>
  <div id="app" :class="{ 'has-navbar-offset': $route.name != 'index' }">
    <Navbar :fixed="true" :transparent="$route.name == 'index'"></Navbar>

    <router-view></router-view>

    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    components: { Navbar },

    created () {
      this.$Progress.start()

      this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress
          this.$Progress.parseMeta(meta)
        }

        this.$Progress.start()
        next()
      })

      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 500ms ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

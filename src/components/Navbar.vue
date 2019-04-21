<template>
  <nav class="navbar is-primary"
    :class="navbarClass">
    <div class="container">
      <transition name="fade">
        <div class="navbar-brand"
          v-show="showBrand">
          <a class="navbar-item" href="/">Raph.</a>
        </div>
      </transition>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="#" class="navbar-item">Works</a>
        </div>

        <div class="navbar-end">
          <a href="#" class="navbar-item">Blog</a>
          <a href="#" class="navbar-item">Github</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar-item,
  .navbar-link {
    text-transform: uppercase
  }
</style>

<script>
  export default {
    props: {
      fixed: {
        type: Boolean,
        default: false
      },

      showBrand: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      navbarClass () {
        let classes = []

        this.fixed && classes.push('is-fixed-top')

        return classes
      }
    }
  }
</script>

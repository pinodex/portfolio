<template>
  <nav class="navbar"
    :class="navbarClass"
  >
    <div class="container">
      <transition name="fade">
        <div class="navbar-brand"
          v-show="showBrand"
        >
          <a class="navbar-item" href="/">Raph.</a>
        </div>
      </transition>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="#" class="navbar-item">Story</a>
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

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },

    collapsed: {
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
      return {
        'is-fixed-top': this.fixed,
        'is-collapsed': this.collapsed,
        'is-white': this.collapsed,
        'is-dark': !this.collapsed
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.navbar {
  height: #{$navbar-height + 2rem};

  transition: all .3s ease;

  &.is-dark {
    background-color: transparent;
  }

  &.is-white {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }

  &.is-collapsed {
    height: $navbar-height;
  }

  .navbar-brand,
  .navbar-start,
  .navbar-end {
    & > .navbar-item,
    .navbar-link {
      color: #f1f1f1;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  .navbar-brand > .navbar-item {
    font-weight: 600;
  }
}
</style>

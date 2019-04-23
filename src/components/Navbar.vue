<template>
  <nav class="navbar"
    :class="navbarClass"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Raph.</a>

        <a role="button" class="navbar-burger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="#" class="navbar-item">Story</a>
          <a href="#" class="navbar-item">Works</a>
          <a href="#" class="navbar-item">Labs</a>
        </div>

        <div class="navbar-end">
          <a href="https://blog.raphaelmarco.com" class="navbar-item">Blog</a>
          <a href="https://github.com/pinodex" class="navbar-item" target="_blank">Github</a>
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
        'is-dark': !this.collapsed,
        'is-transparent': !this.collapsed
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import 'bulma/sass/utilities/mixins.sass';

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

  @include desktop {
    .navbar-brand {
      transition: width .3s ease;
      overflow: hidden;
      width: 0px;

      & > .navbar-item {
        font-weight: 600;
      }
    }

    &.is-collapsed .navbar-brand {
      width: 80px;
    }
  }
}
</style>

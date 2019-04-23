<template>
  <nav class="navbar"
    :class="navbarClass"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Raph.</router-link>

        <a role="button" class="navbar-burger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item"
            v-for="(link, i) in links"
            :key="i"
            :to="link.target"
          >
            {{ link.name }}
          </router-link>
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

    autohideBrand: {
      type: Boolean,
      default: true
    },

    links: {
      type: Array,
      default: []
    }
  },

  computed: {
    navbarClass () {
      return {
        'is-fixed-top': this.fixed,
        'is-collapsed': this.collapsed,
        'is-white': this.collapsed,
        'is-dark': !this.collapsed,
        'is-transparent': !this.collapsed,
        'is-brand-autohide': this.autohideBrand
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

  .navbar-brand > .navbar-item {
    font-weight: 600;
  }

  @include desktop {
    .navbar-brand {
      transition: width .3s ease;
      overflow: hidden;
      width: 0px;
    }

    &:not(.is-brand-autohide) .navbar-brand,
    &.is-collapsed .navbar-brand {
      width: 80px;
    }
  }
}
</style>

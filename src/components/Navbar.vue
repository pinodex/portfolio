<template>
  <nav class="navbar"
    :class="navbarClass"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link
          class="navbar-item"
          aria-label="Go to Homepage"
          to="/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 512 512" width="50">
            <path fill="#41608C" d="M468 107l-1-1h-81L272 297l-62 109h92l53-93c19-33 31-44 31 0v92l1 1h80l1-1V107z"/>
            <path fill="#30456B" d="M44 107l1-1h81l114 191 62 109h-92l-53-93c-19-33-31-44-31 0v92l-1 1H45l-1-1V107z"/>
            <path fill="#47699A" d="M126 106h64s91 0 91 104c0 103-91 103-91 103h-64V106z"/>
          </svg>
        </router-link>

        <a role="button" class="navbar-burger burger"
          @click.prevent="toggleMenu()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': menuActive }"
      >
        <div class="navbar-start">
          <router-link class="navbar-item"
            v-for="(link, i) in links"
            :key="i"
            :to="link.target"
            :class="{ 'is-active': activeNavItem == i }"
            @click="closeMenu()"
          >
            {{ link.name }}
          </router-link>
        </div>

        <div class="navbar-end">
          <a href="https://blog.raphaelmarco.com" class="navbar-item">Blog</a>
          <a href="https://github.com/pinodex" class="navbar-item is-external" target="_blank" rel="noopener">Github</a>

          <router-link
            class="navbar-item"
            :to="{ name: 'contact' }"
            :class="{ 'is-active': $route.name == 'contact' }"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menuActive: false
  }),

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
        'is-collapsed': this.computedCollapsed,
        'is-white': this.computedCollapsed,
        'is-dark': !this.computedCollapsed,
        'is-transparent': !this.computedCollapsed,
        'is-brand-autohide': this.autohideBrand
      }
    },

    computedCollapsed () {
      return this.collapsed || this.menuActive
    },

    activeNavItem () {
      const name = this.$route.name || ''

      return this.links.findIndex(l => name.indexOf(l.target.name) !== -1)
    }
  },

  watch: {
    menuActive (state) {
      this.$emit('menu', state)
    }
  },

  methods: {
    toggleMenu () {
      this.menuActive = !this.menuActive
    },

    closeMenu () {
      this.menuActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import 'bulma/sass/utilities/mixins.sass';

.navbar {
  @include desktop {
    height: #{$navbar-height + 2rem};
  }

  transition: all .3s ease;

  &.is-dark {
    background-color: transparent;
  }

  &.is-white {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }

  &.is-collapsed {
    @include desktop {
      height: $navbar-height;
    }

    .navbar-start,
    .navbar-end {
      & > a.navbar-item {
        &:hover {
          background-color: transparent;
          color: $primary;
        }

        &.is-active {
          background-color: transparent;
          font-weight: 600;

          color: $primary;

          @include desktop {
            box-shadow: inset 0 -3px 0 $primary;
          }
        }
      }
    }
  }

  &.is-transparent {
    .navbar-start,
    .navbar-end {
      & > a.navbar-item:hover {
        color: #fff;

        @include desktop {
          box-shadow: inset 0 -3px 0 #fff;
        }
      }
    }
  }

  .navbar-brand,
  .navbar-start,
  .navbar-end {
    & > .navbar-item,
    & > .navbar-link {
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;

      transition: all .3s ease;
      text-align: center;

      &.is-external {
        &::after {
          font-family: 'icomoon';
          font-size: 0.9rem;
          content: '\e905';

          margin-left: 5px;

          @include desktop {
            overflow: hidden;
            max-width: 0px;

            transition: max-width .3s ease;
          }
        }

        &:hover::after {
          max-width: 20px;
        }
      }
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

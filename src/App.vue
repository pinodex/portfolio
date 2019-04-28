<template>
  <div
    :class="{ 'has-navbar-fixed-top': !isNavbarCollapsible }"
  >
    <Navbar
      @menu="state => navbarMenuActive = state"
      :collapsed="isNavbarCollapsed"
      :autohideBrand="autohideBrand"
      :links="navLinks"
      ref="navbar"
      fixed
    />

    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
    >
      <router-view />
    </transition>

    <Footer />

    <transition
      name="fade"
    >
      <div
        class="dark-overlay is-hidden-desktop"
        @click="closeMenu()"
        v-show="navbarMenuActive"
      ></div>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: { Navbar, Footer },

  data: () => ({
    isScrolledPast: true,
    isNavbarCollapsible: false,
    navbarMenuActive: false,

    navLinks: [
      {
        name: 'Story',
        target: {
          name: 'story'
        }
      },

      {
        name: 'Projects',
        target: {
          name: 'projects'
        }
      },

      {
        name: 'Labs',
        target: {
          name: 'labs'
        }
      }
    ]
  }),

  computed: {
    isNavbarCollapsed () {
      if (this.isNavbarCollapsible) {
        return this.isScrolledPast
      }

      return true
    },

    autohideBrand () {
      return this.$route.meta.isBrandVisible !== true
    }
  },

  watch: {
    '$route.path': function () {
      this.closeMenu()
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll, false)

    this.onScroll()
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll, false)
  },

  methods: {
    onScroll (e) {
      this.$root.$emit('scroll', e)

      this.isScrolledPast = window.scrollY > window.innerHeight / 2
    },

    beforeEnter (e) {
      this.isNavbarCollapsible = this.$route.meta.isNavbarCollapsible
    },

    closeMenu () {
      this.$refs.navbar.closeMenu()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';
@import '@/assets/scss/fonts.scss';

.has-navbar-fixed-top {
  margin-top: $navbar-height;
}

.dark-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.75);
  z-index: 1;
}
</style>

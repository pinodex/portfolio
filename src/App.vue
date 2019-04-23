<template>
  <div
    :class="{ 'has-navbar-fixed-top': !isNavbarCollapsible }"
  >
    <Navbar
      :collapsed="isNavbarCollapsed"
      :autohideBrand="autohideBrand"
      :links="navLinks"
      ref="navbar"
      fixed
    />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: { Navbar, Footer },

  data: () => ({
    isScrolledPast: true,

    navLinks: [
      {
        name: 'Story',
        target: '/story'
      },

      {
        name: 'Projects',
        target: '/projects'
      },

      {
        name: 'Labs',
        target: '/labs'
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

    isNavbarCollapsible () {
      return this.$route.meta.isNavbarCollapsible == true
    },

    autohideBrand () {
      return this.$route.meta.isBrandVisible !== true
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
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/_variables.scss';

.has-navbar-fixed-top {
  margin-top: $navbar-height;
}
</style>

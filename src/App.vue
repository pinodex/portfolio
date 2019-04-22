<template>
  <div>
    <Navbar
      :collapsed="isNavbarCollapsed"
      ref="navbar"
      fixed
    />

    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },

  data: () => ({
    isNavbarCollapsed: true
  }),

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

      this.isNavbarCollapsed = window.scrollY > window.innerHeight / 2
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';
</style>

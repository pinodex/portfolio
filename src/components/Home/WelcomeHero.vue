<template>
  <div class="hero is-primary is-bold">
    <div class="hero-body has-text-centered">
      <div class="is-hidden-desktop">
        <img
          class="logo"
          src="@/assets/svg/logo-outline.svg"
          svg-inline
        />

        <h1 class="is-size-1 name">Raphael Marco</h1>

        <h2 class="is-size-5 name-title">Software Engineer</h2>
      </div>

      <div class="is-hidden-touch" :style="boxStyle">
        <img
          class="logo"
          src="@/assets/svg/logo-outline.svg"
          svg-inline
        />

        <h1 class="is-size-1 name">Raphael Marco</h1>

        <h2 class="is-size-5 name-title">Software Engineer</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    boxTranslateY: 0,
  }),

  computed: {
    boxStyle() {
      return {
        transform: `translateY(${this.boxTranslateY}px)`,
      };
    },
  },

  mounted() {
    this.$root.$on('scroll', () => {
      this.boxTranslateY = (window.scrollY / 2);
    });
  },

  beforeDestroy() {
    this.$root.$off('scroll');
  },
};
</script>

<style lang="sass" scoped>
.hero
  overflow: hidden

.hero-body
  justify-content: center

.logo
  height: 150px

.name
  text-transform: uppercase
  font-weight: 700
  color: $white-bis

.name-title
  font-weight: 300
  letter-spacing: 2px
  color: $white-bis
</style>

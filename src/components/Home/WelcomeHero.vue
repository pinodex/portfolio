<template>
  <div class="hero is-primary is-bold">
    <div class="hero-body has-text-centered">
      <div class="outlined-box is-hidden-desktop">
        <p class="is-size-1 name">Raphael Marco</p>

        <p class="is-size-5 name-title">Full-Stack Web Developer</p>
      </div>

      <div class="outlined-box is-hidden-touch" :style="boxStyle">
        <p class="is-size-1 name">Raphael Marco</p>

        <p class="is-size-5 name-title">Full-Stack Web Developer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    boxTranslateY: 0
  }),

  computed: {
    boxStyle () {
      return {
        transform: `translateY(${this.boxTranslateY}px)`
      }
    }
  },

  mounted () {
    this.$root.$on('scroll', e => {
      this.boxTranslateY = (window.scrollY / 2)
    })
  },

  beforeDestroy () {
    this.$root.$off('scroll')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.hero {
  overflow: hidden;
}

.outlined-box {
  display: inline-block;

  border: 2px solid lighten($primary, 10);
  border-radius: $border-radius;

  margin: 0 auto;
  padding: 3rem;

  text-align: center;
}

.name {
  text-transform: uppercase;
  font-weight: 700;
  color: #f1f1f1;
}

.name-title {
  font-weight: 300;
  letter-spacing: 2px;
  color: #f1f1f1;
}
</style>

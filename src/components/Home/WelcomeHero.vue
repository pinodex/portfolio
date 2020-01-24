<template>
  <div class="hero is-primary is-bold">
    <div class="hero-body has-text-centered">
      <div class="outlined-box is-hidden-desktop">
        <h1 class="is-size-1 name">Raphael Marco</h1>

        <h2 class="is-size-5 name-title">Full-Stack Web Developer</h2>
      </div>

      <div class="outlined-box is-hidden-touch" :style="boxStyle">
        <h1 class="is-size-1 name">Raphael Marco</h1>

        <h2 class="is-size-5 name-title">Full-Stack Developer</h2>
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

<style lang="scss" scoped>
.hero {
  overflow: hidden;
}

.outlined-box {
  display: inline-block;

  border: 2px solid lighten($primary, 10);
  border-radius: $radius;

  margin: 0 auto;
  padding: 3rem;

  text-align: center;
}

.name {
  text-transform: uppercase;
  font-weight: 700;
  color: $white-bis;
}

.name-title {
  font-weight: 300;
  letter-spacing: 2px;
  color: $white-bis;
}
</style>

<template>
  <div class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="outlined-box">
          <p class="is-size-1 name">Raphael Marco</p>

          <p class="is-size-5 name-title">Full-Stack Web Developer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/_variables.scss';

  .outlined-box {
    display: inline-block;

    border: 1px solid lighten($primary, 10);
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

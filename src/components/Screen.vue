<template>
  <div class="browser">
    <div class="frame">
      <div class="content">
        <img :src="content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .browser {
    width: 100%;
    padding-bottom: 68.75%;

    margin-bottom: -3rem;

    position: relative;
  }

  .frame {
    background: url('/static/img/screen-frame.png');
    background-repeat: no-repeat;
    background-size: cover;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;

    padding-top: 7.95%;
    padding-left: 6.7%;
    padding-right: 6.9%;
  }

  .content {
    width: 100%;
    padding-bottom: 56.25%;
  }

  .content img {
    width: 100%;
  }
</style>

<script>
  export default {
    props: {
      content: {
        type: String
      }
    }
  }
</script>

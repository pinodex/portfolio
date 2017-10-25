<template>
  <div class="browser">
    <div class="frame">
      <div class="content">
        <img :src="content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .browser {
    width: 100%;
    padding-bottom: 68.75%;

    position: relative;
  }

  .frame {
    background: url('/static/img/browser-frame.png');
    background-repeat: no-repeat;
    background-size: cover;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;

    padding-top: 9.2%;
    padding-left: 6.7%;
    padding-right: 6.9%;
  }

  .content {
    width: 100%;
    padding-bottom: 56.25%;
  }
</style>

<script>
  export default {
    props: {
      content: {
        type: String
      }
    },

    computed: {
      contentStyle () {
        return {
          'background-image': `url(${this.content})`
        }
      }
    }
  }
</script>

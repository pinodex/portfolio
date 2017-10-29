<template>
  <div class="work" :style="workStyle">
    <transition name="fade">
      <div v-if="isThumbnailLoaded">
        <div class="thumbnail" :style="thumbnailStyle"></div>
      </div>
    </transition>

    <router-link class="overlay-link"
      :to="{ name: 'work', params: { slug: model.slug } }">
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      model: {
        type: Object
      }
    },

    data () {
      return {
        isThumbnailLoaded: false
      }
    },

    computed: {
      workStyle () {
        return {
          'background-color': this.model.dominantColor
        }
      },

      thumbnailStyle () {
        if (!this.isThumbnailLoaded)  {
          return {}
        }

        return {
          'background-image': `url(${this.model.thumbnail})`
        }
      }
    },

    mounted () {
      let thumbnail = new Image()

      thumbnail.src = this.model.thumbnail
      thumbnail.onload = () => this.isThumbnailLoaded = true
    }
  }
</script>

<style lang="scss" scoped>
  .work {
    position: relative;
    height: 200px;
    overflow: hidden;

    .thumbnail {
      background-position: center;
      background-size: cover;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      transition: transform 0.5s ease;
    }

    &:hover .thumbnail {
      transform: scale(1.1);
    }
  }

  .works .overlay-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

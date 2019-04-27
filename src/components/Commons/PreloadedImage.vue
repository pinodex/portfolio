<template>
  <transition name="fade">
    <img
      v-show="mountedSrc"
      :src="mountedSrc"
    >
  </transition>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  },

  data: () => ({
    mountedSrc: null
  }),

  mounted () {
    const image = new Image()

    image.onload = () => {
      this.mountedSrc = this.src
    }

    image.src = this.src
  }
}
</script>

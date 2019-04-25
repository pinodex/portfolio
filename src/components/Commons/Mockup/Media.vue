<template>
  <PreloadedImage
    v-if="type == 'image'"
    :src="src"
  />

  <video
    muted
    autoplay
    controls
    loop
    v-else-if="type == 'video'"
    :src="src"
  >
  </video>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },

    type: {
      type: String
    }
  }
}
</script>

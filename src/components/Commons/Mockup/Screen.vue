<template>
  <div class="window">
    <div class="frame">
      <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 640 18">
        <path fill="#CDCCCC" d="M640 18H0V4c0-2 2-4 4-4h632c2 0 4 2 4 4v14z"/>
        <circle cx="10" cy="9" r="4" fill="#E64D3C"/>
        <circle cx="23" cy="9" r="4" fill="#F0C419"/>
        <circle cx="35" cy="9" r="4" fill="#4FBA6F"/>
      </svg>

      <div class="image is-16by9">
        <slot>
          <MockupMedia
            :src="src"
            :type="type"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },

    type: {
      type: String,
      default: 'image',
    },
  },
};
</script>

<style lang="sass" scoped>
.frame
  border-radius: 6px
  overflow: hidden
  position: relative
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1)

svg
  display: block
</style>

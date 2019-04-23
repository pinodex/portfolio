<template>
  <div class="window">
    <div class="frame">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 640 19">
        <g>
          <path fill="#CDCCCC" d="M640,18.4H0V4c0-2.2,1.8-4,4-4H636c2.2,0,4,1.8,4,4V18.4z" />
          <circle opacity="0.71" fill="#E64D3C" cx="10.5" cy="10" r="3.8" />
          <circle opacity="0.71" fill="#F0C419" cx="22.8" cy="10" r="3.8" />
          <circle opacity="0.71" fill="#4FBA6F" cx="35.1" cy="10" r="3.8" />
        </g>
      </svg>

      <div class="image is-16by9"
        :style="imageStyle"
      >
        <PreloadedImage
          class="image"
          :src="content"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String
    }
  }
}
</script>

<style scoped>
svg {
  margin-bottom: -7px;
}
</style>

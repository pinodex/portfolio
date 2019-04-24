<template>
  <div class="window">
    <div class="frame">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 640 18" preserveAspectRatio="none">
        <g>
          <path fill="#CDCCCC" d="M640,18H0V3.9C0,1.8,1.8,0,4,0h631.9c2.2,0,4,1.8,4,3.9V18z" />
          <circle opacity="0.71" fill="#E64D3C" cx="10.4" cy="9" r="3.8" />
          <circle opacity="0.71" fill="#F0C419" cx="22.7" cy="9" r="3.8" />
          <circle opacity="0.71" fill="#4FBA6F" cx="35.1" cy="9" r="3.8" />
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

<style lang="scss" scoped>
.frame {
  border-radius: 6px;
  overflow: hidden;

  position: relative;

  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
              0 0 0 1px rgba(10, 10, 10, 0.1);
}

svg {
  display: block;
}
</style>

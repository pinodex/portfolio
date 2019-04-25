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
      default: null
    },

    type: {
      type: String,
      default: 'image'
    }
  }
}
</script>

<style lang="scss" scoped>
.frame {
  border-radius: 6px;
  overflow: hidden;

  position: relative;

  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.10);
}

svg {
  display: block;
}
</style>

<template>
  <div class="window">
    <div class="frame">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 640 36">
        <g>
          <path fill="#CDCCCC" d="M640,18.4H0V4c0-2.2,1.8-4,4-4H636c2.2,0,4,1.8,4,4V18.4z" />
          <circle opacity="0.71" fill="#E64D3C" cx="10.5" cy="10" r="3.8" />
          <circle opacity="0.71" fill="#F0C419" cx="22.8" cy="10" r="3.8" />
          <circle opacity="0.71" fill="#4FBA6F" cx="35.1" cy="10" r="3.8" />
          <path fill="#E6E6E5" d="M133.4,7.2c-0.3-1-1.1-1.6-2.4-1.6H58.3c-1.3,0-2.1,0.7-2.4,1.6l-3.2,9.9c-0.3,0.8-1.6,1.2-1.6,1.2h87.1c0,0-1.3-0.3-1.6-1.2L133.4,7.2z" />
          <rect y="18.4" fill="#E6E6E5" width="640" height="16.8" />
        </g>
      </svg>

      <div class="image is-16by9">
        <PreloadedImage
          class="image"
          :src="content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Screen from './Screen'

export default {
  extends: Screen
}
</script>

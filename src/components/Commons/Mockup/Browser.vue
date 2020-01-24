<template>
  <div class="window">
    <div class="frame">
      <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 640 36">
        <path fill="#CDCCCC" d="M640 18H0V4c0-2 2-4 4-4h632c2 0 4 2 4 4v14z"/>
        <circle cx="10" cy="9" r="4" fill="#E64D3C"/>
        <circle cx="23" cy="9" r="4" fill="#F0C419"/>
        <circle cx="35" cy="9" r="4" fill="#4FBA6F"/>
        <path fill="#E6E6E5" d="M133 7l-2-2H58l-2 2-3 10-2 1h87l-1-1-4-10zM0 18h640v18H0z"/>
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
import Screen from './Screen.vue';

export default {
  extends: Screen,
};
</script>

<template>
  <div class="social-links">
    <a href="https://github.com/pinodex" rel="noopener" aria-label="@pinodex on Github">
      <span class="icon">
        <i class="icon-github"></i>
      </span>
    </a>

    <a href="https://ph.linkedin.com/in/raphaelmarco" rel="noopener" aria-label="Raphael Marco on LinkedIn">
      <span class="icon">
        <i class="icon-linkedin"></i>
      </span>
    </a>

    <a href="https://stackoverflow.com/users/2680698/raphael-marco" rel="noopener" aria-label="Raphael Marco on StackOverflow"
      v-if="!pro"
    >
      <span class="icon">
        <i class="icon-stack-overflow"></i>
      </span>
    </a>

    <a href="https://codepen.io/pinodex/" rel="noopener" aria-label="Raphael Marco on Codepen"
      v-if="!pro"
    >
      <span class="icon">
        <i class="icon-codepen"></i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    pro: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

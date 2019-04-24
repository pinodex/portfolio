<template>
  <a :href="url" class="box is-paddingless">
    <div class="columns is-vcentered is-gapless">
      <div class="column is-8">
        <figure class="image is-16by9">
          <PreloadedImage
            :src="image"
            :alt="title"
          />
        </figure>
      </div>

      <div class="column">
        <div class="content">
          <p class="is-size-5 has-text-weight-semibold" v-html="title"></p>

          <p v-html="excerpt"></p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Post from './Post'

export default {
  extends: Post
}
</script>

<style lang="scss" scoped>
.content {
  padding: 1.5rem;
}
</style>

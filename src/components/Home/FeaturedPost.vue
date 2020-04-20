<template>
  <a :href="post.url" class="box is-paddingless">
    <div class="columns is-vcentered is-gapless">
      <div class="column is-8">
        <figure class="image is-16by9">
          <PreloadedImage
            :src="post.image"
            :alt="post.title"
          />
        </figure>
      </div>

      <div class="column">
        <div class="content">
          <p class="is-size-5 has-text-weight-semibold" v-html="post.title"></p>

          <p v-html="post.excerpt"></p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Post from './Post.vue';

export default {
  extends: Post,
};
</script>

<style lang="sass" scoped>
.content
  padding: 1.5rem
</style>

<template>
  <a :href="url" class="box is-paddingless">
    <div class="columns is-vcentered is-gapless">
      <div class="column is-8">
        <figure class="image is-16by9">
          <img :src="image" :alt="title">
        </figure>
      </div>

      <div class="column">
        <div class="content">
          <p class="is-size-4 has-text-weight-semibold">{{ title }}</p>

          <p>{{ excerpt }}</p>

          <a :href="url" class="button is-primary">Read More</a>
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
  padding: 2rem;
}
</style>

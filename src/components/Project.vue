<template>
  <router-link
    class="card"
    :to="{ name: 'projects.view', params: { slug } }"
  >
    <div class="card-image">
      <figure class="image is-16by9">
        <PreloadedImage
          :src="thumbnail"
          :alt="name"
        />
      </figure>
    </div>

    <div class="card-content">
      <p class="is-size-5 has-text-weight-semibold">{{ name }}</p>

      <p>{{ description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    slug: {
      type: String
    },

    name: {
      type: String
    },

    description: {
      type: String
    },

    thumbnail: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';
</style>

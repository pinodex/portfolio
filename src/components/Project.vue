<template>
  <router-link
    class="card"
    :to="{ name: route, params: { slug } }"
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
      <div class="content">
        <p class="is-size-5 has-text-weight-semibold">{{ name }}</p>

        <p>{{ description }}</p>

        <div class="tags" v-if="tags.length">
          <span
            class="tag"
            v-for="(tag, i) in tags"
            :key="i"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
    },

    slug: {
      type: String,
    },

    name: {
      type: String,
    },

    description: {
      type: String,
    },

    tags: {
      type: Array,
      default: () => [],
    },

    thumbnail: {
      type: String,
    },
  },
};
</script>

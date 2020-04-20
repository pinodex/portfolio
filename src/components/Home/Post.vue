<template>
  <a :href="post.url" class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <PreloadedImage
          :src="post.image"
          :alt="post.title"
        />
      </figure>
    </div>

    <div class="card-content">
      <div class="content">
        <p class="is-size-5 has-text-weight-semibold">{{ post.title }}</p>

        <div class="excerpt">
          <p>{{ post.excerpt }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

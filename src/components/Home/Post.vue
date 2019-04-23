<template>
  <a :href="url" class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <PreloadedImage
          :src="image"
          :alt="title"
        />
      </figure>
    </div>

    <div class="card-content">
      <div class="content">
        <p class="is-size-5 has-text-weight-semibold">{{ title }}</p>

        <div class="excerpt">
          <p>{{ excerpt }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { blog } from '@/config'

export default {
  props: {
    post: {
      type: Object
    }
  },

  computed: {
    url () {
      return `${blog.url}${this.post.url}`
    },

    title () {
      return this.post.title
    },

    image () {
      return `${blog.url}${this.post.feature_image}`
    },

    excerpt () {
      if (this.post.custom_excerpt) {
        return this.post.custom_excerpt
      }

      let trimmed = this.post.html.replace(/(<([^>]+)>)/ig, '').substring(0, 100)

      trimmed = trimmed.substring(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')))

      return trimmed + '...'
    }
  }
}
</script>

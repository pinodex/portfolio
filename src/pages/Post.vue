<template>
  <section v-if="post">
    <div class="hero is-dark has-contents-below">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="is-size-2">{{ post.title }}</h1>

          <p>Posted on {{ new Date(post.published_at).toLocaleString() }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8">
          <figure class="image has-contents-below" v-if="post.feature_image">
            <img :src="post.feature_image" />
          </figure>

          <div class="content" v-html="post.html"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    inject: ['$blog'],

    data () {
      return {
        post: null
      }
    },

    mounted () {
      this.$blog.get(`/posts/slug/${this.$route.params.slug}`)
        .then(response => this.post = response.data.posts[0])
    }
  }
</script>

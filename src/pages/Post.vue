<template>
  <transition name="fade">
    <section v-if="post">
      <div class="hero is-dark has-contents-below"
        :class="{ 'is-fullheight': post.feature_image }"
        :style="heroStyle">

        <div class="overlay" v-if="post.feature_image"></div>

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
            <!--
            <figure class="image has-contents-below" v-if="post.feature_image">
              <img :src="post.feature_image" />
            </figure>
            -->

            <div class="content" v-html="post.html"></div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
  export default {
    inject: ['$blog'],

    data () {
      return {
        post: null
      }
    },

    computed: {
      heroStyle () {
        if (!this.post) {
          return {}
        }

        let style = {}

        style['background-image'] = `url(${this.post.feature_image})`

        return style
      }
    },

    mounted () {
      this.$blog.get(`/posts/slug/${this.$route.params.slug}`)
        .then(response => {
          this.post = response.data.posts[0]

          this.post.html = this.replaceContentUrl(this.post.html)

          if (this.post.feature_image) {
            this.post.feature_image = this.replaceContentUrl(this.post.feature_image)
          }
        })
        .catch(error => {
          this.$router.push({ name: 'index' })
        })
    },

    methods: {
      replaceContentUrl (text) {
        let url = window.__BLOG__.url

        return text.replace(/\/content\//g, `${url}/content/`)
      }
    }
  }
</script>

<style scoped>
  .hero {
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>

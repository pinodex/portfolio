<template>
  <div>
    <WelcomeHero class="is-fullheight" />

    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <p class="is-size-1 is-spaced">Hi there!</p>

            <p class="is-size-4 is-spaced">I’m Raphael Marco and I write codes.</p>

            <p class="is-spaced">I played around with web development when I was a kid. That became my playground. Now I‘m working on different projects for myself and for other people.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"
            v-for="(project, i) in featuredProjects"
            :key="i"
          >
            <FeaturedProject class="featured-project"
              :slug="project.slug"
              :name="project.name"
              :thumbnail="project.thumbnail"
              :color="project.color"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="hero is-primary is-bold has-border-radius">
          <div class="hero-body">
            <p class="is-size-3 is-spaced">Blog</p>

            <p class="is-size-5">Random stuffs about me, development, design, events, and anything that I can write a blog post about.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <FeaturedPost
          v-if="featuredPost"
          :post="featuredPost"
        />

        <div class="columns">
          <div class="column"
            v-for="(post, i) in posts"
            :key="i"
          >
            <Post
              :post="post"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import WelcomeHero from '@/components/Home/WelcomeHero'
import FeaturedProject from '@/components/Home/FeaturedProject'
import FeaturedPost from '@/components/Home/FeaturedPost'
import Post from '@/components/Home/Post'

import featuredProjects from '@data/projects/featured.json'

export default {
  inject: ['$blog'],

  components: { WelcomeHero, FeaturedProject, FeaturedPost, Post },

  data: () => ({
    featuredProjects,

    featuredPost: null,
    posts: []
  }),

  async mounted () {
    await this.loadPosts()
  },

  methods: {
    async loadPosts () {
      const params = { limit: 5 }
      const request = await this.$blog.get('/posts/', { params })

      this.featuredPost = request.data.posts[0]
      this.posts = request.data.posts.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.featured-project {
  transition: transform .3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}
</style>

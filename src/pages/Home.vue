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
      <div class="container featured-project-container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-half-mobile"
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

        <router-link to="/projects" class="box has-text-centered is-hidden-desktop">
          <p>
            <span>More Projects</span>

            <span class="icon">
              <i class="icon-chevron-right"></i>
            </span>
          </p>
        </router-link>

        <router-link to="/projects" class="more-projects is-hidden-touch" title="More">
          <span class="icon">
            <i class="icon-chevron-right"></i>
          </span>
        </router-link>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <a href="//blog.raphaelmarco.com" class="hero is-primary is-bold has-border-radius">
          <div class="hero-body">
            <p class="is-size-4">blog.raphaelmarco.com</p>

            <p class="is-size-6">Random stuffs about me, development, design, events, and anything that I can write a blog post about.</p>
          </div>
        </a>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <FeaturedPost
          v-if="featuredPost"
          :post="featuredPost"
        />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-half-mobile"
            v-for="(post, i) in posts"
            :key="i"
          >
            <Post
              class="post"
              :post="post"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <p class="is-size-3 is-spaced">Contact</p>

            <p class="is-size-5 is-spaced">
              You can reach me at <span class="has-text-weight-semibold">raphaelmarco &#128231; outlook.com</span>
            </p>

            <p class="is-size-5 is-spaced">
              My GitHub profile is <a href="https://github.com/pinodex" class="has-text-weight-semibold">@pinodex</a>
            </p>
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
@import 'bulma/sass/utilities/mixins.sass';

@include desktop {
  .featured-project {
    transition: transform .3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
}

.featured-project-container {
  position: relative;
}

.more-projects {
  position: absolute;
  top: calc(50% - 4rem / 2);
  right: -2rem;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: 1px solid #eee;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  height: 4rem;
  width: 4rem;

  .icon i {
    font-size: 2rem;
    color: #4a4a4a;
  }
}

.post {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

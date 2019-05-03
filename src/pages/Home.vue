<template>
  <div>
    <WelcomeHero class="is-fullheight" />

    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <p class="is-size-1 is-spaced">Hi there!</p>

            <h1 class="is-size-4 is-spaced">I’m Raphael Marco and I write codes.</h1>

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
            <FeaturedProject
              class="featured-project translate-on-hover"
              :slug="project.slug"
              :name="project.name"
              :thumbnail="project.thumbnail"
              :color="project.color"
            />
          </div>
        </div>

        <router-link
          class="box has-text-centered is-hidden-desktop"
          :to="{ name: 'projects' }"
        >
          <p>
            <span>More Projects</span>

            <span class="icon">
              <i class="icon-chevron-right"></i>
            </span>
          </p>
        </router-link>

        <router-link
          class="more-projects is-hidden-touch"
          :to="{ name: 'projects' }"
          aria-label="View more projects"
          title="More"
        >
          <span class="icon">
            <i class="icon-chevron-right"></i>
          </span>
        </router-link>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <a href="https://blog.raphaelmarco.com" class="hero is-primary is-bold has-border-radius translate-on-hover">
          <div class="hero-body">
            <h1 class="is-size-4 has-text-weight-semibold">blog.raphaelmarco.com</h1>

            <p class="is-size-6">Random stuffs about me, development, design, events, and anything that I can write a blog post about.</p>
          </div>
        </a>
      </div>
    </section>

    <section class="section featured-post-container">
      <div class="container">
        <FeaturedPost
          class="translate-on-hover"
          v-if="featuredPost"
          :post="featuredPost"
        />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div
            class="column is-one-quarter-desktop is-half-tablet is-full-mobile"
            v-for="(post, i) in posts"
            :key="i"
          >
            <Post
              class="post translate-on-hover"
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
            <h1 class="is-size-3 is-spaced">Contact</h1>

            <p class="is-size-5 is-spaced">
              You can reach me at <span class="has-text-weight-semibold">me@raphaelmarco.com</span>
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
    this.setPageTitle()

    await this.loadPosts()
  },

  methods: {
    async loadPosts () {
      try {
        const posts = await this.$blog.getPosts(5)

        this.featuredPost = posts[0]
        this.posts = posts.slice(1)
      } catch (e) {}
    }
  }
}
</script>

<style lang="scss" scoped>
@include mobile {
  .featured-post-container {
    padding-bottom: 0;
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

  background: $white;
  border: 1px solid $white-ter;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  height: 4rem;
  width: 4rem;

  transition: transform .3s ease;

  &:hover {
    transform: translateX(4px);

    .icon i {
      color: $link;
    }
  }

  .icon i {
    font-size: 2rem;
    color: $grey-dark;

    transition: transform .3s ease;
  }
}

.post {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

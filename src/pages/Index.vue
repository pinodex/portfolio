<template>
  <transition name="fade">
    <div class="main">
      <section class="hero is-dark is-fullheight">
        <div class="hero-body">
          <NameBox></NameBox>
        </div>
      </section>

      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="content">
              <h1 class="title">Hi there!</h1>

              <p class="is-size-5">I&lsquo;m Raphael Marco and I write codes.</p>

              <p>I played around with web development when I was a kid. That became my playground. Now I&lsquo;m working on different projects for myself and for other people.</p>

              <div class="level is-mobile has-contents-below section-divider">
                <div class="level-left">
                  <h2 class="subtitle">Here&lsquo;s some of my work</h2>
                </div>

                <div class="level-right">
                  <router-link :to="{ name: 'works' }">View All</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns works is-gapless is-centered is-hidden-touch">
        <div class="column is-3" v-for="work in works">
          <Work :model="work"></Work>
        </div>
      </div>

      <div class="columns works is-gapless is-multiline is-mobile is-centered is-hidden-desktop">
        <div class="column is-6" v-for="work in works">
          <Work :model="work"></Work>
        </div>
      </div>

      <div class="container section-divider" v-if="showPosts">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="content">
              <div class="level is-mobile has-contents-below section-divider">
                <div class="level-left">
                  <h2 class="subtitle">Blog</h2>
                </div>

                <div class="level-right">
                  <a href="https://blog.raphaelmarco.com">Visit Site</a>
                </div>
              </div>

              <template v-if="posts.length > 0">
                <blockquote v-for="post in posts" :key="post.id">
                  <h1 class="is-size-4">
                    <router-link :to="{ name: 'post', params: { slug: post.slug } }">{{ post.title }}</router-link>
                  </h1>

                  <p class="is-size-6 is-text-gray">
                    <small>Posted on {{ new Date(post.created_at).toLocaleString() }}</small>
                  </p>
                </blockquote>
              </template>

              <template v-else>
                <blockquote v-for="i in postCountLimit">
                  <h1 class="is-size-4">
                    <span class="skeleton-text"></span>
                  </h1>

                  <p class="is-size-6 is-text-gray">
                    <small><span class="skeleton-text short"></span></small>
                  </p>
                </blockquote>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import NameBox from '@/components/NameBox'
  import Work from '@/components/Work'

  import works from '@/works/featured'

  export default {
    inject: ['$blog'],

    components: { Navbar, NameBox, Work },

    data () {
      return {
        works: [],
        posts: [],

        showPosts: true,
        postCountLimit: 5
      }
    },

    mounted () {
      this.works = works

      let params = { limit: this.postCountLimit }

      this.$blog.get('/posts', { params })
        .then(response => this.posts = response.data.posts)
        .catch(error => this.showPosts = false)
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    & > .hero {
      background: #263238;
      position: relative;

      .hero-body {
        margin: 0 auto;
        text-align: center;
      }
    }
  }

  .hero {
    margin-bottom: 2rem;
  }

  .section-divider {
    margin-top: 3rem;
  }

  .skeleton-text {
    display: inline-block;

    background: #e0e0e0;
    max-width: 500px;
    width: 100%;

    height: 1.5rem;

    &.short {
      max-width: 300px;
      height: 1rem;
    }
  }
</style>

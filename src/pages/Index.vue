<template>
  <transition name="fade">
    <div class="main" @mousemove="updateMousePosition">
      <section class="hero is-dark is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="outline-box" :style="outlineBoxStyle">
              <p class="is-size-1 hero-title">Raphael Marco</p>
              <p class="is-size-5 hero-subtitle">Web Developer</p>
            </div>
          </div>
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

      <div class="columns works is-mobile is-gapless">
        <div class="column is-3" v-for="work in works">
          <div class="work">
            <div class="thumbnail" :style="workStyle(work)"></div>

            <router-link class="overlay-link"
              :to="{ name: 'work', params: { slug: work.slug } }">
            </router-link>
          </div>
        </div>
      </div>

      <div class="container section-divider" v-if="posts.length > 0">
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

              <blockquote v-for="post in posts" :key="post.id">
                <h1 class="is-size-4">
                  <router-link :to="{ name: 'post', params: { slug: post.slug } }">{{ post.title }}</router-link>
                </h1>

                <p class="is-size-6 is-text-gray">
                  <small>Posted on {{ new Date(post.created_at).toLocaleString() }}</small>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import works from '@/works/featured'

  export default {
    inject: ['$blog'],

    components: { Navbar },

    data () {
      return {
        mouseX: 0,
        mouseY: 0,
        hasReceivedMouseMove: false,

        works: [],
        posts: []
      }
    },

    computed: {
      outlineBoxStyle () {
        let style = {},
            pos = this.boxShadowPosition

        style['box-shadow'] = `${pos.x}px ${pos.y}px 0px 0px rgba(0, 0, 0, 0.2)`
        style['transform'] = `translate(${pos.x / 2}px, ${pos.y / 2}px)`

        return style
      },

      boxShadowPosition () {
        let x = 0, y = 0

        if (!this.hasReceivedMouseMove) {
          return { x, y }
        }

        x = (this.mouseX - screen.width / 2) / 16 * -1
        y = (this.mouseY - screen.height /2) / 16 * -1

        return { x, y }
      }
    },

    mounted () {
      this.works = works

      this.$blog.get('/posts?limit=5')
        .then(response => this.posts = response.data.posts)
    },

    methods: {
      updateMousePosition (event) {
        this.mouseX = event.x
        this.mouseY = event.y

        this.hasReceivedMouseMove = true
      },

      workStyle (work) {
        let style = {}

        style['background-image'] = `url(${work.thumbnail})`

        return style
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    & > .hero {
      background: #263238;
      position: relative;

      .hero-body {
        text-align: center;
      }
    }
  }

  .hero {
    margin-bottom: 2rem;
  }

  .outline-box {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 2rem;
  }

  .hero-title {
    text-transform: uppercase;
    font-weight: bold;
  }

  .hero-subtitle {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 300;
    color: #ccc;
  }

  .section-divider {
    margin-top: 3rem;
  }

  .work {
    position: relative;
    background: #eee;
    height: 200px;
    overflow: hidden;

    .thumbnail {
      background-position: center;
      background-size: cover;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      transition: transform 0.5s ease;
    }

    &:hover .thumbnail {
      transform: scale(1.1);
    }
  }

  .works .overlay-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

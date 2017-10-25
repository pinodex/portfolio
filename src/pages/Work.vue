<template>
  <div v-if="work">
    <div class="hero is-medium" :style="headerStyle">
      <div class="hero-body">
        <div class="container">
          <div class="work-text-container">
            <p class="work-title is-size-3" v-html="work.name"></p>
          </div>

          <div class="work-text-container">
            <p class="work-description is-size-6" v-html="work.description"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content">
            <component :is="post"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import works from '@/works'
  import Navbar from '@/components/Navbar'

  export default {
    components: { Navbar },

    data () {
      return {
        work: null,
        post: null
      }
    },

    computed: {
      headerStyle () {
        let style = {}

        style['background-image'] = `url(${this.work.thumbnail})`

        return style
      }
    },

    mounted () {
      this.work = works.find(item => item.slug == this.$route.params.slug)

      import(`@/works/${this.$route.params.slug}.md`)
        .then(data => this.post = data.default)
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    background-size: cover;
    margin-bottom: 1rem;

    .hero-body,
    .hero-head >>> .navbar {
      background: rgba(38, 50, 56, 0.9);
    }

    .hero-head >>> .navbar {
      box-shadow: none;
    }
  }

  .work-text-container {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .work-title,
  .work-description {
    display: inline-block;
    background: #fff;
    padding: 0 0.5rem;
  }
</style>

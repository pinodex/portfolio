<template>
  <div>
    <div class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-1">Works</h1>
          <p class="is-size-4">A showcase of several works that I&lsquo;ve worked on.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column is-4" v-for="chunk in chunks">
          <div class="work" v-for="work in chunk">
            <figure class="image">
              <img :src="work.thumbnail" />
            </figure>

            <div class="details">
              <h2 class="name" v-html="work.name"></h2>
              <p class="description" v-html="work.description"></p>

              <p class="link">
                <router-link :to="{ name: 'work', params: { slug: work.slug } }">
                  Read more
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import works from '@/works'

  export default {
    data () {
      return {
        chunks: []
      }
    },

    mounted () {
      works.forEach((work, index) => {
        let column = index % 3

        if (!this.chunks[column]) {
          this.chunks[column] = []
        }

        this.chunks[column].push(work)
      })

      this.$forceUpdate()

      this.$root.setTitle('Works')
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    margin-bottom: 3rem;
  }

  .work {
    position: relative;
    border: 1px solid #eee;

    & + .work {
      margin-top: 1rem;
    }

    .image {
      margin-bottom: 1rem;
    }

    .details {
      padding: 1rem;

      .name, .link {
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .description {
        margin-top: 1rem;
        font-size: 0.9rem;
      }

      .link {
        margin-top: 1rem;
      }
    }
  }
</style>

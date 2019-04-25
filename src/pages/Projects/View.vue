<template>
  <div>
    <section class="section" v-if="meta">
      <div class="container">
        <div
          class="hero is-primary project-header has-border-radius"
          :class="{ 'is-medium': !meta.logo }"
          :style="headerStyle"
        >
          <div class="hero-body">
            <div class="content">
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <div>
                      <h1 class="title" v-html="meta.name"></h1>
                      <p v-html="meta.description"></p>
                    </div>
                  </div>
                </div>

                <div class="level-right">
                  <div
                    class="level-item"
                    v-if="meta.logo"
                  >
                    <figure class="image">
                      <img :src="meta.logo" alt="Logo">
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" v-if="project">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="content">
              <component
                :is="project.default"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="level">
              <div class="level-left">
                <div class="level-item" v-if="prev">
                  <div>
                    <p class="has-text-weight-semibold">
                      <router-link
                        :to="{ name: 'projects.view', params: { slug: prev.slug } }"
                      >
                        {{ prev.name }}
                      </router-link>
                    </p>

                    <p class="has-text-grey-light">Previous</p>
                  </div>
                </div>
              </div>

              <div class="level-right">
                <div class="level-item" v-if="next">
                  <div class="has-text-right">
                    <p class="has-text-weight-semibold">
                      <router-link
                        :to="{ name: 'projects.view', params: { slug: next.slug } }"
                      >
                        {{ next.name }}
                      </router-link>
                    </p>

                    <p class="has-text-grey-light">Next</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import projects from '@data/projects/index.json'

export default {
  data: () => ({
    project: null
  }),

  computed: {
    headerStyle () {
      let headerImage = this.meta.header || this.meta.thumbnail

      return {
        backgroundImage: `
          linear-gradient(
            141deg,
            rgb(17, 40, 53) 0%,
            rgba(36, 59, 85, 0.75) 71%,
            rgba(40, 60, 107, 0.75) 100%
          ),

          url(${headerImage})
        `
      }
    },

    index () {
      return projects.findIndex(p => p.slug == this.$route.params.slug)
    },

    meta () {
      return projects[this.index]
    },

    prev () {
      return projects[this.index - 1]
    },

    next () {
      return projects[this.index + 1]
    }
  },

  watch: {
    async meta (meta) {
      await this.load()
    }
  },

  async mounted () {
    await this.load()
  },

  methods: {
    async load () {
      this.project = await import(`@data/projects/${this.$route.params.slug}.md`)

      this.setPageTitle(this.meta.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/mixins.sass';

::v-deep .window {
  padding: 2rem;

  @include touch {
    padding: 2rem 0;
  }
}

.project-header {
  background-size: cover;
  background-position: center;

  @include mobile {
    text-align: center;
  }
}
</style>

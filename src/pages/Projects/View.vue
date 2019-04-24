<template>
  <div>
    <section class="section" v-if="meta">
      <div class="container">
        <div
          class="hero is-primary is-medium project-header has-border-radius"
          :style="headerStyle"
        >
          <div class="hero-body">
            <div class="content">
              <h1 class="title">{{ meta.name }}</h1>

              <p>{{ meta.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" v-if="work">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="content">
              <component
                :is="work.default"
              />
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
    meta: null,
    work: null
  }),

  computed: {
    headerStyle () {
      return {
        backgroundImage: `
          linear-gradient(
            141deg,
            rgb(17, 40, 53) 0%,
            rgba(36, 59, 85, 0.75) 71%,
            rgba(40, 60, 107, 0.75) 100%
          ),

          url(${this.meta.thumbnail})
        `
      }
    }
  },

  async mounted () {
    const slug = this.$route.params.slug

    this.meta = projects.find(p => p.slug == slug)

    this.work = await import(`@data/projects/${slug}.md`)
  }
}
</script>

<style lang="scss" scoped>
::v-deep .window {
  padding: 2rem 0;
}

.project-header {
  background-size: cover;
  background-position: center;
}
</style>

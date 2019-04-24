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
              <h1 class="title" v-html="meta.name"></h1>

              <p v-html="meta.description"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" v-if="lab">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="content">
              <component
                :is="lab.default"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import labs from '@data/labs/index.json'

export default {
  data: () => ({
    meta: null,
    lab: null
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

    this.meta = labs.find(p => p.slug == slug)

    this.lab = await import(`@data/labs/${slug}.md`)

    this.$root.setPageTitle(this.meta.name)
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

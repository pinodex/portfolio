<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero is-primary is-bold has-border-radius">
          <div class="hero-body">
            <div class="content">
              <h1 class="title">Projects</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="content">
              <component
                v-if="work"
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

  async mounted () {
    const slug = this.$route.params.slug

    this.meta = projects.find(p => p.slug == slug)

    this.work = await import(`@data/projects/${slug}.md`)
  }
}
</script>

<style lang="scss" scoped>
::v-deep .window {
  padding: 2rem;
}
</style>

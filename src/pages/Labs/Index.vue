<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero page-heading is-primary is-bold has-border-radius">
          <div class="heading-art"></div>

          <div class="hero-body">
            <div class="content">
              <h1 class="title">Labs</h1>

              <p>A collection of experimental projects that I created and have worked on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-3-desktop is-6-tablet"
            v-for="(entry, i) in entries"
            :key="i"
          >
            <Project
              class="project"
              route="labs.view"
              :name="entry.name"
              :description="entry.description"
              :thumbnail="entry.thumbnail"
              :slug="entry.slug"
              :tags="entry.tags"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Project from '@/components/Project'

import entries from '@data/labs/index.json'

export default {
  components: { Project },

  data: () => ({
    entries
  }),

  mounted () {
    this.$root.setPageTitle('Labs')
  }
}
</script>

<style lang="scss" scoped>
.project {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.page-heading .heading-art {
  background-image: url(/assets/svg/labs.svg);
}
</style>

<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero page-heading is-primary is-bold has-border-radius">
          <div class="heading-art"></div>

          <div class="hero-body">
            <div class="content">
              <h1 class="title">Projects</h1>

              <p>A collection of personal, freelance, and school &amp; projects that I created and have worked on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-3"
            v-for="(project, i) in projects"
            :key="i"
          >
            <Project
              class="project"
              :name="project.name"
              :description="project.description"
              :thumbnail="project.thumbnail"
              :slug="project.slug"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Project from '@/components/Project'

import projects from '@data/projects/index.json'

export default {
  components: { Project },

  data: () => ({
    projects
  }),

  mounted () {
    this.$root.setPageTitle('Projects')
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
  background-image: url(/assets/svg/start-up.svg);
}
</style>

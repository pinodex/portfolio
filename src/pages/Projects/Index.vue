<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero page-heading is-primary is-bold has-border-radius">
          <div class="hero-body">
            <div class="content">
              <h1 class="title">Projects</h1>

              <p>A collection of personal, freelance, and school &amp; projects that I created and have worked on.</p>
            </div>
          </div>

          <svg class="heading-art" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
            <path fill="#FFF" d="M413 282l-23 23 3 3 38 41 3-4c5-4 6-11 3-17l-24-46zM306 390l-25 24 46 25c5 3 13 1 17-3l5-5-41-38-2-3zm10-74c-10 10-2 40 13 55 49 49 82 71 102 80 6 3 12 2 17-3 4-4 6-11 3-17-10-20-32-54-79-102-15-14-45-24-56-13zm58-149c22 29 43 61 62 95 14-4 34-1 57 5a15 15 0 0 0 15-25l-43-42c-36-36-78-41-91-33zM266 495c-5-34-6-45-4-57-30-17-63-37-95-61-7 13-2 55 31 88l43 43a15 15 0 0 0 25-13zM151 151c-18 17-18 46 0 63s46 18 63 0c18-17 18-46 0-64a45 45 0 0 0-63 1zM12 124c25-2 53-15 75-37s35-49 37-73C88 3 52-2 15 1 7 1 1 7 1 15c-3 39 2 75 11 109z"/>
            <path fill="#FFF" d="M22 153a544 544 0 0 0 232 246l35-35c-10-23-12-52 6-69 18-18 46-16 69-6l34-34A544 544 0 0 0 153 24c-5 29-20 59-45 84s-56 41-86 45zm107-24a75 75 0 0 1 106 106 75 75 0 0 1-106-106z"/>
          </svg>
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
              class="project translate-on-hover"
              route="projects.view"
              :name="entry.name"
              :description="entry.description"
              :thumbnail="entry.thumbnail"
              :slug="entry.slug"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Project from '@/components/Project'

import entries from '@data/projects/index.json'

export default {
  components: { Project },

  data: () => ({
    entries
  }),

  mounted () {
    this.setPageTitle('Projects')
  }
}
</script>

<style lang="scss" scoped>
.project {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

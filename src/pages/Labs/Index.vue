<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero page-heading is-primary is-bold has-border-radius">
          <div class="hero-body">
            <div class="content">
              <h1 class="title">Labs</h1>

              <p>A collection of experimental projects that I created and have worked on.</p>
            </div>
          </div>

          <svg class="heading-art" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
            <path fill="#FFF" d="M290 432L181 264V128c0-6-4-11-10-11h-54c-6 0-10 5-10 11v136L7 433c-5 8-7 17-7 27 0 29 23 52 52 52h195c10 1 20-2 28-8 24-15 31-47 15-72zm-43 59H52c-5 0-11-1-15-4-15-9-20-28-12-43l101-172 2-5V139h32v128l2 6 110 171c4 5 5 11 5 17 0 17-13 30-30 30z"/>
            <path fill="#FFF" d="M154 310l-19-10-90 154-2 5c0 6 5 11 11 11h74v-22H72l82-138zm333-64H320c-23 0-43 19-43 42v171c0 30 24 54 54 54h96c29 0 53-24 53-54V314l25-24a26 26 0 0 0-18-44zm3 29l-28 27c-2 2-3 5-3 8v149c0 18-14 32-32 32h-96c-18 0-32-14-32-32V288c0-11 9-21 21-21h167l3 1v7z"/>
            <path fill="#FFF" d="M416 310v139h-32v21h43c6 0 11-5 11-11V310h-22zM299 155V11c0-6-5-11-11-11h-75c-6 0-10 5-10 11v147c-13 4-26 9-38 16l11 19c12-8 26-13 40-17 5-1 8-5 8-10V21h53v142c0 5 4 10 9 11 37 7 71 27 95 57l17-13c-25-32-60-54-99-63zm155-5a37 37 0 1 0 0 74 37 37 0 0 0 0-74zm0 53c-9 0-16-7-16-16s7-16 16-16c8 0 16 7 16 16s-8 16-16 16zM416 75a32 32 0 1 0 0 64 32 32 0 0 0 0-64zm0 43a11 11 0 1 1 11-11c0 6-5 11-11 11zM37 85a37 37 0 1 0 0 75 37 37 0 0 0 0-75zm0 54c-9 0-16-7-16-16s7-16 16-16 16 7 16 16-7 16-16 16zM85 11a32 32 0 1 0 0 64 32 32 0 0 0 0-64zm0 42a11 11 0 1 1 0-21 11 11 0 0 1 0 21zm235 257h32v21h-32zm0 42h21v21h-21zm0 43h32v21h-32zm0 43h21v21h-21zM21 192h21v21H21zm32 54h21v21H53zm182 42h21v21h-21zm-22-42h21v21h-21zm-10-43h21v21h-21zm10 235h21v21h-21zm-32-43h21v21h-21z"/>
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
    this.setPageTitle('Labs')
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

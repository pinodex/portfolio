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

          <img
            class="heading-art"
            src="@/assets/svg/labs.svg"
            svg-inline
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4"
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
import entries from '@data/labs/index.json';
import Project from '@/components/Project.vue';


export default {
  components: { Project },

  data: () => ({
    entries,
  }),

  mounted() {
    this.setPageTitle('Labs');
  },
};
</script>

<style lang="sass" scoped>
.project
  height: 100%
  display: flex
  flex-direction: column
</style>

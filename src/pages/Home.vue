<template>
  <div>
    <WelcomeHero class="is-fullheight" />

    <section class="intro">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <p class="is-size-1 is-spaced">Hi there!</p>

            <p class="is-size-4 is-spaced">I’m Raphael Marco and I write codes.</p>

            <p class="is-spaced">I played around with web development when I was a kid. That became my playground. Now I‘m working on different projects for myself and for other people.</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns">
        <div class="column"
          v-for="(project, i) in featuredProjects"
          :key="i"
        >
          <FeaturedProject class="featured-project"
            :slug="project.slug"
            :name="project.name"
            :thumbnail="project.thumbnail"
            :color="project.color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeHero from '@/components/Home/WelcomeHero'
import FeaturedProject from '@/components/Home/FeaturedProject'

import featuredProjects from '@data/projects/featured.json'

export default {
  components: { WelcomeHero, FeaturedProject },

  data: () => ({
    featuredProjects
  })
}
</script>

<style lang="scss" scoped>
.intro {
  margin: 2rem 0;
}

.featured-project {
  transition: transform .3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}
</style>

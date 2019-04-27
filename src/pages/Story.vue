<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero is-primary is-bold has-border-radius">
          <div class="hero-body">
            <figure class="image is-128x128 is-element-centered has-contents-below">
              <img class="is-rounded" src="/assets/img/avatar.jpg" alt="Avatar">
            </figure>

            <div class="has-text-centered">
              <h1 class="is-size-3">Raphael Marco</h1>
              <h2 class="is-size-6">Full-Stack Developer</h2>
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
              <component :is="story"></component>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import story from '@data/story.md'

export default {
  computed: {
    story: () => story
  },

  mounted () {
    this.setPageTitle('Story')
  }
}
</script>

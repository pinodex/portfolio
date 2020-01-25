<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero is-primary is-bold has-border-radius">
          <div class="hero-body">
            <figure class="image is-128x128 is-element-centered has-contents-below">
              <PreloadedImage
                class="is-rounded"
                src="/assets/img/avatar.jpg"
                alt="Avatar"
              />
            </figure>

            <div class="has-text-centered">
              <h1 class="is-size-3">Raphael Marco</h1>
              <h2 class="is-size-6">Software Engineer</h2>

              <SocialLinks
                class="links"
                :pro="true"
              />
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
import story from '@data/story.md';
import SocialLinks from '@/components/SocialLinks.vue';

export default {
  components: { SocialLinks },

  computed: {
    story: () => story,
  },

  mounted() {
    this.setPageTitle('About');
  },
};
</script>

<style lang="scss" scoped>
.skillset {
  ul {
    font-size: 0.9rem;
  }
}

.links::v-deep a {
  color: #fff;
}
</style>

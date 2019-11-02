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
              <h2 class="is-size-6">Full-Stack Developer</h2>

              <SocialLinks
                :pro="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8">
            <div class="content">
              <component :is="story"></component>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="has-text-weight-bold">Work:</p>

                  <p>
                    <span class="has-text-weight-semibold">Software Engineer</span><br />
                    Salarium
                  </p>
                </div>

                <hr />

                <div class="columns is-mobile">
                  <div class="column">
                    <div class="content skillset">
                      <p class="has-text-weight-bold">Languages &amp; Frameworks:</p>

                      <ul>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>HTML, CSS</li>
                        <li>Sass/SCSS</li>
                        <li>Laravel</li>
                        <li>Vue.js</li>
                      </ul>
                    </div>
                  </div>

                  <div class="column">
                    <div class="content skillset">
                      <p class="has-text-weight-bold">Tools &amp; Technologies:</p>

                      <ul>
                        <li>Git</li>
                        <li>Node.js</li>
                        <li>Sublime Text</li>
                        <li>PhpStorm</li>
                        <li>Android Studio</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>MySQL</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SocialLinks from '@/components/SocialLinks'
import story from '@data/story.md'

export default {
  components: { SocialLinks },

  computed: {
    story: () => story
  },

  mounted () {
    this.setPageTitle('About')
  }
}
</script>

<style lang="scss" scoped>
.skillset {
  ul {
    font-size: 0.9rem;
  }
}
</style>

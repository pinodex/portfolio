<template>
  <footer class="footer">
    <section class="section">
      <div class="container has-text-centered">
        <p class="is-size-3">Raphael Marco</p>

        <SocialLinks />

        <p>
          This website is open-source! <a href="https://github.com/pinodex/portfolio">Fork it on Github</a>
        </p>

        <p>
          <router-link
            :to="{ name: 'privacyPolicy' }"
          >
            Privacy Policy
          </router-link>
        </p>
      </div>
    </section>
  </footer>
</template>

<script>
import SocialLinks from '@/components/SocialLinks'

export default {
  components: { SocialLinks }
}
</script>

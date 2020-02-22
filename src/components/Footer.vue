<template>
  <footer class="footer">
    <section class="section">
      <div class="container has-text-centered">
        <p class="is-size-3">Raphael Marco</p>

        <SocialLinks />

        <p>
          This website is open-source! <a href="https://github.com/pinodex/portfolio">Fork it on Github</a>
        </p>

        <ul class="horizontal">
          <li>
            <a href="/feed/rss.xml" target="_blank">RSS</a>
          </li>

          <li>
            <a href="/feed/atom.xml" target="_blank">Atom</a>
          </li>

          <li>
            <a href="/feed/index.json" target="_blank">JSON Feed</a>
          </li>
        </ul>

        <ul class="horizontal">
          <li>
            <router-link
              :to="{ name: 'contact' }"
              :class="{ 'has-text-weight-semibold': $route.name == 'contact' }"
            >
              Contact
            </router-link>
          </li>

          <li>
            <router-link
              :to="{ name: 'privacyPolicy' }"
              :class="{ 'has-text-weight-semibold': $route.name == 'privacyPolicy' }"
            >
              Privacy Policy
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script>
import SocialLinks from '@/components/SocialLinks.vue';

export default {
  components: { SocialLinks },
};
</script>

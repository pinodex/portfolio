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
            <a :href="rssFeed" target="_blank">RSS</a>
          </li>

          <li>
            <a :href="atomFeed" target="_blank">Atom</a>
          </li>

          <li>
            <a :href="jsonFeed" target="_blank">JSON Feed</a>
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
import { site } from '@/config';

export default {
  components: { SocialLinks },

  computed: {
    rssFeed() {
      return `${site.url}/feed/rss.xml`;
    },

    atomFeed() {
      return `${site.url}/feed/atom.xml`;
    },

    jsonFeed() {
      return `${site.url}/feed/index.json`;
    },
  },
};
</script>

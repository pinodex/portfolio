<template>
  <section class="section">
    <div class="container is-vmargined">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content">
            <h1 class="title">Privacy Policy</h1>

            <div
              class="notification is-info"
              v-if="isOptedOut"
            >
              <p>
                You opted out in this tracking and is not participating in the collection of data.
              </p>
            </div>

            <p>
              I use a third-party service called

              <a
                class="has-text-weight-semibold"
                href="https://analytics.google.com/analytics/web/"
                target="_blank"
              >
                Google Analytics
              </a>

              to collect data about my visitors.
            </p>

            <p>
              It allows me to learn and understand the people who visits my website, gather
              information about the technology that my visitors use (browser, OS), and gather
              information about what country does my visitors came from.
            </p>

            <p>No personal data is collected.</p>

            <h2 class="subtitle">What data is collected?</h2>

            <ul>
              <li>What browser are you using</li>
              <li>What kind of device are you using</li>
              <li>What ISP do you use</li>
              <li>What country do you came from</li>
              <li>How long is your stay here</li>
              <li>How often do you return to this website</li>
            </ul>

            <hr />

            <template v-if="isOptedOut">
              <p>
                If you agree to the Privacy Policy stated above, you may opt-in to tracking by

                <span class="has-text-weight-semibold">{{ site.url }}</span> with

                <a
                  class="has-text-weight-semibold"
                  href="https://analytics.google.com/analytics/web/"
                  target="_blank"
                >
                  Google Analytics
                </a>.

                It will help me learn about my visitors and make better decisions about
                website content.
              </p>

              <button
                class="button"
                @click="optIn()"
              >
                Opt-In of Tracking
              </button>
            </template>

            <template v-else>
              <h2 class="subtitle">Opt-out of Tracking</h2>

              <p>
                If you don&lsquo;t want your data to be collected, you may opt-out of tracking
                from <span class="has-text-weight-semibold">{{ site.url }}</span>
                by clicking the button below.
              </p>

              <p>
                <button
                  class="button"
                  :disabled="isOptedOut"
                  @click="optOut()"
                >
                  Opt-Out of Tracking
                </button>
              </p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { site } from '@/config';

export default {
  computed: {
    site: () => site,

    isOptedOut() {
      return Boolean(window.localStorage.noTracking);
    },
  },

  mounted() {
    this.setPageTitle('Privacy Policy');
  },

  methods: {
    confirmOptIn() {

    },

    optIn() {
      window.localStorage.removeItem('noTracking');

      window.location.reload();
    },

    optOut() {
      window.localStorage.noTracking = true;

      window.location.reload();
    },
  },
};
</script>

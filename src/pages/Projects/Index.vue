<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero page-heading is-primary is-bold has-border-radius">
          <div class="hero-body">
            <div class="content">
              <h1 class="title">Projects</h1>

              <p>
                A collection of personal, freelance, and school &amp; projects that
                I created and have worked on.
              </p>
            </div>
          </div>

          <img
            src="@/assets/svg/projects.svg"
            :class="{ 'heading-art': true, 'fly': isFlying }"
            @click="fly()"
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
              route="projects.view"
              :name="entry.name"
              :description="entry.description"
              :thumbnail="entry.thumbnail"
              :slug="entry.slug"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import entries from '@data/projects/index.json';
import Project from '@/components/Project.vue';


export default {
  components: { Project },

  data: () => ({
    entries,

    isFlying: false,
    isLanding: false,
  }),

  mounted() {
    this.setPageTitle('Projects');
  },

  methods: {
    fly() {
      if (this.isFlying) return;

      this.isFlying = true;

      setTimeout(() => {
        this.isFlying = false;
      }, 4000);
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.heading-art path {
  transition: fill .3s ease;
}

.heading-art:hover path {
  fill: $white;
}

.fly {
  animation: fly 4s ease forwards;

  path {
    fill: $white !important;
  }
}

@keyframes fly {
  10% {
    transform: rotate(43deg);
  }

  10%, 12%,
  14%, 16%,
  18%, 20%,
  22%, 24%,
  26%, 28% {
    transform: rotate(43deg) translate3d(-2px, 2px, 0);
  }

  11%, 13%,
  15%, 17%,
  19%, 21%,
  23%, 25%,
  27%, 30% {
    transform: rotate(43deg) translate3d(2px, -2px, 0);
  }

  30% {
    transform: rotate(43deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(43deg) translate3d(-100%, -100%, 0);
  }

  70% {
    transform: rotate(43deg) translate3d(-100%, -100%, 0);
  }

  90% {
    transform: rotate(43deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0) translate3d(0, 0, 0);
  }
}
</style>

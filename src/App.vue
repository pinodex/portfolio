<template>
  <div id="app"
    @mousemove="broadcastMouseMoveEvent"
    :class="{ 'has-navbar-offset': $route.name != 'index' }">
    <Navbar
      :transparent="$route.name == 'index'"
      :blue="scrolledPastHero"
      :fixed="true"></Navbar>

    <router-view></router-view>

    <vue-progress-bar></vue-progress-bar>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p class="is-size-4">Raphael Marco</p>

          <p class="social-links">
            <a href="https://github.com/pinodex"><i class="icon-github"></i></a>
            <a href="http://stackoverflow.com/users/2680698/raphael-marco"><i class="icon-stack-overflow"></i></a>
            <a href="http://codepen.io/pinodex/"><i class="icon-codepen"></i></a>
            <a href="https://ph.linkedin.com/in/raphaelmarco"><i class="icon-linkedin"></i></a>
            <a href="https://twitter.com/pinodexxd"><i class="icon-twitter"></i></a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import '@/icons/style.scss'
  import Navbar from '@/components/Navbar'

  export default {
    components: { Navbar },

    data () {
      return {
        scrolledPastHero: false
      }
    },

    created () {
      window.addEventListener('scroll', () => {
        this.scrolledPastHero = this.$route.name == 'index' &&
          window.scrollY >= window.innerHeight - 60
      })
    },

    methods: {
      broadcastMouseMoveEvent (event) {
        this.$root.$emit('mousemove', event)
      }
    }
  }
</script>

<style lang="scss">
  body {
    color: #263238;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .has-navbar-offset {
    margin-top: 52px;
  }

  .has-contents-below {
    margin-bottom: 1rem !important;
  }

  .footer {
    margin-top: 5rem;
  }

  .social-links {
    a {
      display: inline-block;
      font-size: 1.5rem;
      padding: 1rem;
      color: #555;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 500ms ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

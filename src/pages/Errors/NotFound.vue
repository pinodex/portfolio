<template>
  <section class="section">
    <div class="container is-vmargined">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content">
            <h1 class="title">Page Not Found</h1>

            <p>The page you visited cannot be found on this website.</p>

            <hr />

            <h2 class="subtitle">Here&lsquo;s what you can do</h2>

            <ul>
              <li>Go to <router-link to="/">homepage</router-link></li>
              <li>Browse my <router-link to="/projects">projects</router-link></li>
              <li>Visit the <router-link to="/labs">lab</router-link></li>
              <li>If there used to be a page here and you need it,
                <router-link to="/contact">contact me</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.setPageTitle('Page Not Found');
  },
};
</script>

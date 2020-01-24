<template>
  <section class="section">
    <div class="container is-vmargined">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content">
            <h1 class="title">Contact</h1>

            <p>I can be reached through various channels:</p>

            <ul>
              <li>
                <a href="https://github.com/pinodex">@pinodex on Github</a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/raphaelmarco/">Raphael Marco on LinkedIn</a>
              </li>

              <li>
                <a href="mailto:me@raphaelmarco.com">me@raphaelmarco.com</a>
              </li>
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
    this.setPageTitle('Contact');
  },
};
</script>

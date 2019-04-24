<template>
  <footer class="footer">
    <section class="section">
      <div class="container has-text-centered">
        <p class="is-size-3">Raphael Marco</p>

        <div class="social-links">
          <a href="https://github.com/pinodex">
            <span class="icon">
              <i class="icon-github"></i>
            </span>
          </a>

          <a href="https://ph.linkedin.com/in/raphaelmarco">
            <span class="icon">
              <i class="icon-linkedin"></i>
            </span>
          </a>

          <a href="https://stackoverflow.com/users/2680698/raphael-marco">
            <span class="icon">
              <i class="icon-stack-overflow"></i>
            </span>
          </a>

          <a href="https://codepen.io/pinodex/">
            <span class="icon">
              <i class="icon-codepen"></i>
            </span>
          </a>
        </div>

        <p>
          This website is open-source! <a href="https://github.com/pinodex/portfolio">Fork it on Github</a>
        </p>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.social-links {
  & > a {
    display: inline-block;
    padding: 1.5rem;
  }

  .icon i {
    font-size: 1.5rem;
  }

  a {
    color: #4a4a4a;

    &:hover {
      color: #000;
    }
  }
}
</style>

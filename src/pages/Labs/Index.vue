<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="hero page-heading is-primary is-bold has-border-radius">
          <div class="heading-art"></div>

          <div class="hero-body">
            <div class="content">
              <h1 class="title">Labs</h1>

              <p>A collection of personal, freelance, and school &amp; projects that I created and have worked on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$root.setPageTitle('Labs')
  }
}
</script>

<style lang="scss" scoped>
.page-heading .heading-art {
  background-image: url(/assets/svg/labs.svg);
}
</style>

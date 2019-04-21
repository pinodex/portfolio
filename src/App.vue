<template>
  <div>
    <Navbar fixed />

    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar }
}
</script>

<style lang="scss">
  @import '@/assets/sass/fonts.sass';
  @import '@/assets/sass/styles.sass';
</style>

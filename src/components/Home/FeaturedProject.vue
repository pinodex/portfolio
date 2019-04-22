<template>
  <div class="card" :style="cardStyle">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="thumbnail" :alt="name">
      </figure>
    </div>

    <div class="card-content">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slug: {
      type: String
    },

    name: {
      type: String
    },

    thumbnail: {
      type: String
    },

    color: {
      type: String
    }
  },

  computed: {
    cardStyle () {
      return {
        backgroundColor: this.color
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

.card {
  position: relative;
}

.card-content {
  display: flex;

  @include bind-to-parent();

  z-index: 1;

  &::before,
  &::after {
    @include bind-to-parent();

    content: '';
    transition: all .3s ease;
    z-index: -1;
  }

  &::before {
    background-image: linear-gradient(45deg, rgba(0, 4, 40, 0.75), rgba(0, 78, 146, 0.5));
    opacity: 1;
  }

  &::after {
    background-image: linear-gradient(45deg, rgba(0, 4, 40, 0.75), rgba(0, 78, 146, 0));
    opacity: 0;
  }

  &:hover::before {
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }

  p {
    align-self: flex-end;

    font-weight: 600;
    color: #fff;
  }
}
</style>

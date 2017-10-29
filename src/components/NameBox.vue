<template>
  <div class="outline-box" :style="style">
    <p class="is-size-1 name">Raphael Marco</p>
    <p class="is-size-5 description">Web Developer</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hasReceivedMouseMove: false,

        mouseX: 0,
        mouseY: 0,
      }
    },

    computed: {
      style () {
        let pos = this.boxShadowPosition, style = {}

        style['box-shadow'] = `${pos.x}px ${pos.y}px 0px 0px rgba(0, 0, 0, 0.2)`
        style['transform'] = `translate(${pos.x / 2}px, ${pos.y / 2}px)`

        return style
      },

      boxShadowPosition () {
        let x = 0, y = 0

        if (!this.hasReceivedMouseMove) {
          return { x, y }
        }

        x = (this.mouseX - screen.width / 2) / 16 * -1
        y = (this.mouseY - screen.height /2) / 16 * -1

        return { x, y }
      }
    },

    created () {
      this.$root.$on('mousemove', this.updateMousePosition)
    },

    beforeDestroy () {
      this.$root.$off('mousemove', this.updateMousePosition)
    },

    methods: {
      updateMousePosition (event) {
        this.mouseX = event.x
        this.mouseY = event.y

        this.hasReceivedMouseMove = true
      }
    }
  }
</script>

<style scoped>
  .outline-box {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 2rem;
  }

  .name {
    text-transform: uppercase;
    font-weight: bold;
  }

  .description {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 300;
    color: #ccc;
  }
</style>

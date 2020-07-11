<template>
  <img :src="adaptedSrc" :alt="alt">
</template>

<script>
export default {
  name: 'AppImage',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    adaptedSrc() {
      return `${process.env.appImageRoot}${this.src}`
    }
  }
}
</script>

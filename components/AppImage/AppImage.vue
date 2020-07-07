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
      return `http://84.201.134.251:8000${this.src}`
    }
  }
}
</script>

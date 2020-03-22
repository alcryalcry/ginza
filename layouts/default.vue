<template>
  <main>
    <nuxt />
  </main>
</template>

<script>

import { debounce } from 'throttle-debounce'

export default {
  mounted() {
    window.addEventListener('resize', debounce(250, () => {
      this.handleResize()
    }), false)
    this.handleResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize, false)
  },
  methods: {
    handleResize() {
      const m = 768
      const t = 1024
      const d = Infinity
      let mediaSize = 'desktop'
      if (window.innerWidth < m) {
        mediaSize = 'mobile'
      } else if (window.innerWidth >= m && window.innerWidth < t) {
        mediaSize = 'tablet'
      } else if (window.innerWidth >= t && window.innerWidth < d) {
        mediaSize = 'desktop'
      }
      this.$store.dispatch('mediaQuery/UPDATE_MQ', mediaSize)
    }
  }
}
</script>

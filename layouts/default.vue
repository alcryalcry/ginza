<template>
  <main>
    <nuxt />
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import { debounce } from 'throttle-debounce'

export default {
  watch: {
    $route() {
      this.CLOSE_MENU()
      this.CLOSE_POPUP()
    }
  },
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
    ...mapMutations({
      CLOSE_MENU: 'header/CLOSE_MENU',
      CLOSE_POPUP: 'popup/CLOSE_POPUP'
    }),
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

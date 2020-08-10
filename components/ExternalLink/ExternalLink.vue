<template>
  <a v-if="isUrlExternal" :href="to" target="_blank">
    <slot />
  </a>
  <nuxt-link v-else :to="checkedPath">
    <slot />
  </nuxt-link>
</template>

<script>

export default {
  name: 'ExternalLink',
  components: {
  },
  props: {
    to: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      checkedPath: '',
      isUrlExternal: false
    }
  },
  mounted() {
    if (process.browser) {
      let url = this.to

      this.isUrlExternal = window.location.hostname !== (() => {
        if (/^https?:\/\//.test(url)) {
          const parser = document.createElement('a')
          parser.href = url
          return parser.hostname
        }
        return window.location.hostname
      })()
      if (url.charAt(0) !== '/') {
        url = '/' + url
      }
      if (url.charAt(0) === '/') {
        this.checkedPath = this.localePath(url.replace(window.location.origin, ''))
        if (this.checkedPath.endsWith('/en') || this.checkedPath.endsWith('/ru')) {
          this.checkedPath = this.checkedPath.slice(0, -3)
        }
        return
      }
      this.checkedPath = url.replace(window.location.origin, '')
      this.$emit('is-external', this.isUrlExternal)
    }
  }
}
</script>

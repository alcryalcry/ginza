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
      this.isUrlExternal = window.location.hostname !== (() => {
        if (/^https?:\/\//.test(this.to)) {
          const parser = document.createElement('a')
          parser.href = this.to
          return parser.hostname
        }
        return window.location.hostname
      })()
      if (this.to.charAt(0) === '/') {
        this.checkedPath = this.localePath(this.to.replace(window.location.origin, ''))
        return
      }
      this.checkedPath = this.to.replace(window.location.origin, '')
      this.$emit('is-external', this.isUrlExternal)
    }
  }
}
</script>

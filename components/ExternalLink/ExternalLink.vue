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
      this.checkedPath = this.to.replace(window.location.origin, '')
    }
  }
}
</script>

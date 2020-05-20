<template>
  <a v-if="isUrlExternal" :href="url" target="_blank">
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
    url: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: ''
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
        if (/^https?:\/\//.test(this.url)) {
          const parser = document.createElement('a')
          parser.href = this.url
          return parser.hostname
        }
        return window.location.hostname
      })()
      this.checkedPath = (this.to || this.url).replace(window.location.origin, '')
    }
  }
}
</script>

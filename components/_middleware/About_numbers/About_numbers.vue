<template>
  <AboutNumbers :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import AboutNumbers from '~/components/About/Numbers/Numbers'

export default {
  name: 'MiddlewareAboutNumbers',
  components: {
    AboutNumbers
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    model() {
      return {
        mode: '',
        anchor: false,
        ...this.data,
        ...(this.data.properties || {})
      }
    }
  }
}
</script>

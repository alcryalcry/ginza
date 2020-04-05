<template>
  <AboutNumbers :info="model" :class="model.mode" />
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
        ...this.data
      }
    }
  }
}
</script>

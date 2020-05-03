<template>
  <Subheader :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import Subheader from '~/components/Subheader/Subheader'

export default {
  name: 'MiddlewareSubheader',
  components: {
    Subheader
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

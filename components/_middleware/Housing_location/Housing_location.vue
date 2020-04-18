<template>
  <Location :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import Location from '~/components/Location/Location'

export default {
  name: 'MiddlewareLocation',
  components: {
    Location
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
        ...this.data
      }
    }
  }
}
</script>

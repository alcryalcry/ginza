<template>
  <SeatingPattern :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SeatingPattern from '~/components/SeatingPattern/SeatingPattern'

export default {
  name: 'MiddlewareSeatingPattern',
  components: {
    SeatingPattern
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

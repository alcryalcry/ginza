<template>
  <FixedActions :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import FixedActions from '~/components/FixedActions/FixedActions'

export default {
  name: 'MiddlewareFixedActions',
  components: {
    FixedActions
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

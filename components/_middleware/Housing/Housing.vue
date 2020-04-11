<template>
  <Housing :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import Housing from '~/components/Housing/Housing'

export default {
  name: 'MiddlewareHousing',
  components: {
    Housing
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

<template>
  <ToggleList :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import ToggleList from '~/components/ToggleList/ToggleList'

export default {
  name: 'MiddlewareToggleList',
  components: {
    ToggleList
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

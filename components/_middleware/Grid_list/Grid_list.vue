<template>
  <GridList :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import GridList from '~/components/Grid/List/GridList'

export default {
  name: 'MiddlewareGridList',
  components: {
    GridList
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

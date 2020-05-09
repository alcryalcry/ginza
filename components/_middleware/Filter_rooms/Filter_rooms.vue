<template>
  <FilterRooms :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import FilterRooms from '~/components/Filter/Rooms/FilterRooms'

export default {
  name: 'MiddlewareFilterRooms',
  components: {
    FilterRooms
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

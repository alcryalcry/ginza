<template>
  <div :class="model.mode">
    <Housing :info="model" />
  </div>
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
        ...this.data
      }
    }
  }
}
</script>

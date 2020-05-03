<template>
  <Review :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import Review from '~/components/Review/Review'

export default {
  name: 'MiddlewareReview',
  components: {
    Review
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

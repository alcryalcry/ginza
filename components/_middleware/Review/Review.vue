<template>
  <Review :info="model" :class="model.mode" />
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
        ...this.data
      }
    }
  }
}
</script>

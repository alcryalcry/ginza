<template>
  <ReviewPage :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import ReviewPage from '~/components/Review/Page/ReviewPage'

export default {
  name: 'MiddlewareReview',
  components: {
    ReviewPage
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

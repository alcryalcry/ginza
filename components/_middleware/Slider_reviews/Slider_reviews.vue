<template>
  <SliderReviews :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SliderReviews from '~/components/Slider/Reviews/SliderReviews'

export default {
  name: 'MiddlewareSliderReviews',
  components: {
    SliderReviews
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

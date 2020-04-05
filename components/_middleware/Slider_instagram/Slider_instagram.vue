<template>
  <SliderInstagram :class="model.mode" :info="model" />
</template>

<script>
import SliderInstagram from '~/components/Slider/Instagram/Instagram'

export default {
  name: 'MiddlewareSliderInstagram',
  components: {
    SliderInstagram
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

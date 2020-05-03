<template>
  <SliderInstagram :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SliderInstagram from '~/components/Slider/Instagram/SliderInstagram'

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
        anchor: false,
        ...this.data,
        ...(this.data.properties || {})
      }
    }
  }
}
</script>

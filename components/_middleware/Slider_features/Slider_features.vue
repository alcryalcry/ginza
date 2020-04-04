<template>
  <SliderFeatures :class="model.mode" :info="model" />
</template>

<script>
import SliderFeatures from '~/components/Slider/Features/Features'

export default {
  name: 'MiddlewareSliderFeatures',
  components: {
    SliderFeatures
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

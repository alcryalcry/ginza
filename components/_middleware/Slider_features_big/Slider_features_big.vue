<template>
  <SliderFeaturesBig :class="model.mode" :info="model" />
</template>

<script>
import SliderFeaturesBig from '~/components/Slider/FeaturesBig/FeaturesBig'

export default {
  name: 'MiddlewareSliderFeaturesBig',
  components: {
    SliderFeaturesBig
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

<template>
  <SliderFeaturesBig :info="model" :class="model.mode" :data-anchor="model.anchor" />
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
        anchor: false,
        ...this.data
      }
    }
  }
}
</script>

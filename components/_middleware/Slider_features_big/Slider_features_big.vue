<template>
  <SliderFeaturesBig :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SliderFeaturesBig from '~/components/Slider/FeaturesBig/SliderFeaturesBig'

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
        ...this.data,
        ...(this.data.properties || {})
      }
    }
  }
}
</script>

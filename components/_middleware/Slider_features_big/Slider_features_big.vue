<template>
  <div :class="model.mode">
    <SliderFeaturesBig :info="model" />
  </div>
</template>

<script>
import SliderFeaturesBig from '~/components/Slider/FeaturesBig/FeaturesBig'

export default {
  name: 'MiddlewareHero',
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

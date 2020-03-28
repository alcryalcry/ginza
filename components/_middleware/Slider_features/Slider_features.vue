<template>
  <div :class="model.mode">
    <SliderFeatures :info="model" />
  </div>
</template>

<script>
import SliderFeatures from '~/components/Slider/Features/Features'

export default {
  name: 'MiddlewareHero',
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

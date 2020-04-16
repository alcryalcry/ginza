<template>
  <SliderSeeAlso :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SliderSeeAlso from '~/components/Slider/SeeAlso/SliderSeeAlso'

export default {
  name: 'MiddlewareSliderSeeAlso',
  components: {
    SliderSeeAlso
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

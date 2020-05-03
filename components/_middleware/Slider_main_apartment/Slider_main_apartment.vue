<template>
  <SliderMainApartment :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SliderMainApartment from '~/components/Slider/Apartment/SliderApartment'

export default {
  name: 'MiddlewareSliderMainApartment',
  components: {
    SliderMainApartment
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

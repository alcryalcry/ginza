<template>
  <SliderMain :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SliderMain from '~/components/Slider/Main/SliderMain'

export default {
  name: 'MiddlewareSliderMain',
  components: {
    SliderMain
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

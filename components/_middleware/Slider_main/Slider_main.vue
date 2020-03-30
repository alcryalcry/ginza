<template>
  <div :class="model.mode">
    <SliderMain :info="model" />
  </div>
</template>

<script>
import SliderMain from '~/components/Slider/Main/Main'

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
        ...this.data
      }
    }
  }
}
</script>

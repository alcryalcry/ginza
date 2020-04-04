<template>
  <SliderNews :class="model.mode" :info="model" />
</template>

<script>
import SliderNews from '~/components/Slider/News/News'

export default {
  name: 'MiddlewareSliderNews',
  components: {
    SliderNews
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

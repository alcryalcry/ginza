<template>
  <div ref="mySwiper" v-swiper:mySwiper="options" class="mySwiper">
    <div ref="sliderWrapper" class="swiper-wrapper">
      <slot name="slides" />
    </div>
    <slot class="nav" name="navigation" />
    <slot name="pagination" />
  </div>
</template>

<script>
import SliderMethods from '~/mixins/sliderMethods'

export default {
  name: 'Slider',
  components: {
  },
  mixins: [SliderMethods],
  props: {
    customOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.swiper-slide {
  flex: 1 0 auto;
}

.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}
.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
</style>

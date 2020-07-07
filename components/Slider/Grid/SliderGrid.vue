<template>
  <div class="slider-grid">
    <Slider
      v-if="isReady && model.length"
      :custom-options="customOptions"
      :has-navigation="true"
    >
      <template v-slot:slides>
        <div
          v-for="slide in model"
          :key="slide.id"
          :class="slide.mode"
          class="swiper-slide"
        >
          <picture v-if="slide.image" class="image">
            <app-image data-not-lazy :src="slide.image" alt="" /></picture>
        </div>
      </template>
    </Slider>
  </div>
</template>

<script>
import MODEL from './model'
import Slider from '~/components/Slider/Slider'

export default {
  name: 'SliderGrid',
  components: {
    Slider
  },
  props: {
    info: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      isReady: false,
      customOptions: {
        spaceBetween: 20,
        breakpoints: {
          767: {
          }
        }
      }
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  mounted() {
    if (process.browser) {
      this.isReady = true
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.slider-grid {
  position: relative;
  width: 100%;
  user-select: none;
  &::v-deep {
    .navigation {
      .navigation-btn {
        top: calc(50% - 4rem);
        &.swiper-button-next {
          right: -20rem;
        }
        &.swiper-button-prev {
          left: -20rem;
        }
      }
    }
  }

  .mySwiper {
    height: 100%;
    overflow: hidden;
    &::v-deep {
      .swiper-wrapper {
        height: 100%;
      }
    }
  }

  .swiper-slide {
    flex: 0 0 auto;
    width: 100%;
    height: 100%;

    .image {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

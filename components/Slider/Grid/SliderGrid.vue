<template>
  <div class="slider-grid">
    <Slider
      v-if="isReady && model.length"
      :custom-options="customOptions"
    >
      <template v-slot:slides>
        <div
          v-for="slide in model"
          :key="slide.id"
          :class="slide.mode"
          class="swiper-slide"
        >
          <picture v-if="slide.image" class="image">
            <img :src="slide.image" alt="">
          </picture>
        </div>
      </template>
      <template v-slot:navigation>
        <div class="navigation d-show">
          <button type="button" class="navigation-btn swiper-button-prev">
            <iconArrowCircle class="icon" />
          </button>
          <button type="button" class="navigation-btn swiper-button-next">
            <iconArrowCircle class="icon" />
          </button>
        </div>
      </template>
    </Slider>
  </div>
</template>

<script>
import MODEL from './model'
import Slider from '~/components/Slider/Slider'
import iconArrowCircle from '~/assets/svg/arrow-circle.svg'

export default {
  name: 'SliderGrid',
  components: {
    Slider,
    iconArrowCircle
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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
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
        position: absolute;
        top: calc(50% - 6rem);
        width: 8rem;
        height: 8rem;
        background: $white;
        color: $black17;
        border-radius: 50%;
        border: 1px solid rgba($black17, .5);
        overflow: hidden;
        cursor: pointer;
        opacity: 1;
        z-index: 1;
        transition: background-color .2s ease, color .2s ease, opacity .2s ease, border-color .2s ease;
        @include desktop {
          &:hover {
          border-color: $brown;
          background-color: $brown;
          color: $white;
          }
        }
        &.swiper-button-disabled {
          opacity: 0;
          pointer-events: none;
        }
        &.swiper-button-next {
          right: -20rem;
          .icon {
            transform: rotate(180deg);
          }
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

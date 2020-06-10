<template>
  <div v-swiper:mySwiper="options" class="mySwiper" :class="{ hasNavigation }">
    <div ref="sliderWrapper" class="swiper-wrapper">
      <slot name="slides" />
    </div>
    <slot v-if="hasNavigation" class="nav" name="navigation">
      <div class="navigation d-show" :class="navigationMode">
        <button type="button" class="navigation-btn swiper-button-prev">
          <iconArrowCircle class="icon" />
        </button>
        <button type="button" class="navigation-btn swiper-button-next">
          <iconArrowCircle class="icon" />
        </button>
      </div>
    </slot>
    <slot v-if="hasPagination" name="pagination">
      <div class="swiper-pagination" :class="paginationMode" />
    </slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import iconArrowCircle from '~/assets/svg/arrow-circle.svg'
import SliderMethods from '~/mixins/sliderMethods'

export default {
  name: 'Slider',
  components: {
    iconArrowCircle
  },
  mixins: [SliderMethods],
  props: {
    customOptions: {
      type: Object,
      default: () => {}
    },
    hasPagination: {
      type: Boolean,
      default: false
    },
    hasNavigation: {
      type: Boolean,
      default: false
    },
    paginationMode: {
      type: String,
      default: ''
    },
    navigationMode: {
      type: String,
      default: ''
    },
    isCenteredSlides: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      GET_MQ: 'mediaQuery/GET_MQ'
    }),
    generatedCustomOptions() {
      return {
        ...this.navigationDefault,
        ...this.paginationDefault,
        ...this.customOptions,
        ...this.centerSlide
      }
    },
    centerSlide() {
      return this.GET_MQ === 'desktop' && this.isCenteredSlides ? {
        initialSlide: Math.abs((this.mySwiper || {}).length / 3)
      } : {}
    },
    navigationDefault() {
      return this.hasNavigation ? {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      } : {}
    },
    paginationDefault() {
      return this.hasPagination ? {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      } : {}
    }
  }
}
</script>

<style lang="scss" scoped>
.page--dark {
  .mySwiper {
    &:not(.hasNavigation) {
      cursor: url('/svg/cursor-white.svg'), pointer;
    }
  }
}
.mySwiper {
  &:not(.hasNavigation) {
    cursor: url('/svg/cursor-black.svg'), pointer;
  }

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

  .navigation {
    .navigation-btn {
      position: absolute;
      top: calc(50% - 6rem);
      width: 8rem;
      height: 8rem;
      background: transparent;
      color: $black17;
      border-radius: 50%;
      border: 1px solid rgba($black17, .5);
      overflow: hidden;
      cursor: pointer;
      opacity: 1;
      z-index: 1;
      transform: translate3d(0,0,0);
      transform-style: preserve-3d !important;
      -webkit-backface-visibility: hidden;
      transition: background-color .2s ease, color .2s ease, opacity .2s ease, border-color .2s ease;
      @include desktop {
        &:hover {
        border-color: $brown;
        background-color: $brown;
        color: $white;
        }
      }
      &.swiper-button-disabled {
        opacity: 0.3;
        pointer-events: none;
      }
      &.swiper-button-next {
        right: -14rem;
        .icon {
          transform: rotate(180deg);
        }
      }
      &.swiper-button-prev {
        left: -14rem;
      }
    }
    &.navigation--transparent-white {
      .navigation-btn {
        color: $white;
        border-color: $white;
        @include desktop {
          &:hover {
            background-color: $white;
            color: $black17;
          }
        }
      }
    }
    &.navigation--white {
      .navigation-btn {
        background: $white;
        border: none;

        @include desktop {
          &:hover {
            background-color: $brown;
            color: $white;
          }
        }
      }
    }
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding: 3rem 0;

    &::v-deep {
      .swiper-pagination-bullet {
        position: relative;
        padding: .5rem;
        margin: 0 .5rem;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        &::before {
          content: '';
          position: absolute;
          top: calc(50% - .5rem);
          left: calc(50% - .5rem);
          width: 1rem;
          height: 1rem;
          border: 1px solid $border;
          border-radius: 50%;
          transition: border-color .2s ease, background-color .2s ease;
        }
        &.swiper-pagination-bullet-active {
          &::before {
            border-color: $brown;
            background-color: $brown;
          }
        }
      }
    }
  }
}
</style>

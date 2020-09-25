<template>
  <div class="slider-news">
    <Section>
      <HeadTitle class="isShort" :info="model" />
      <Slider
        v-if="model.values.length"
        :custom-options="customOptions"
        :has-navigation="true"
        navigation-mode="navigation--white"
        class="slider-pre-wrapper"
      >
        <template v-slot:slides>
          <div
            v-for="(slide, index) in model.values"
            :key="index"
            :class="slide.mode"
            class="swiper-slide"
          >
            <ExternalLink :to="slide.url">
              <picture class="image">
                <app-image data-not-lazy :src="slide.image || slide.preview" :alt="slide.name" /></picture>
              <div v-if="slide.title" class="text text--16" v-html="slide.title" />
            </ExternalLink>
          </div>
        </template>
      </Slider>
    </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'
import HeadTitle from '~/components/HeadTitle/HeadTitle'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    Slider,
    HeadTitle,
    Section,
    ExternalLink
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      customOptions: {
        spaceBetween: 20,
        loop: false,
        slidesPerView: 3,
        watchSlidesVisibility: true,
        slideClass: 'swiper-slide',
        breakpoints: {
          767: {
            slidesOffsetAfter: 90,
            slidesPerView: 1
          }
        }
      }
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-news {
  overflow: hidden;
  user-select: none;
  &::v-deep {
    // .swiper-wrapper {
    //   backface-visibility: hidden !important;
    //   transform-style: preserve-3d !important;
    //   transition-delay: 0.1s !important;
    // }
    .swiper-slide {
      transform: translate3d(0,0,0);
      transform-style: preserve-3d !important;
      -webkit-backface-visibility: hidden;
    }
  }

  .slider-pre-wrapper {
    @include desktop {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }

  .head-title {
    margin-bottom: 6rem;
  }

  .navigation {
    .navigation-btn {
      width: 8rem;
      height: 8rem;
      &.swiper-button-next {
        top: 9.5rem;
        right: -10vw;
      }
      &.swiper-button-prev {
        top: 9.5rem;
        left: -10vw;
      }
    }
  }

  .slider-pre-wrapper {
    position: relative;
  }

  .image {
    position: relative;
    display: flex;
    margin-bottom: 1.5rem;
  }

  .swiper-slide {
    flex: 1 0 auto;
    width: 25rem;
    transition: opacity .2s ease;
    align-self: flex-start;
    &:not(.swiper-slide-visible) {
      opacity: 0.3;
    }
    .image {
      width: 100%;
      height: 27rem;
    }
  }
}
</style>

<template>
  <div class="slider-news">
    <Section>
      <HeadTitle class="isShort" :info="model" />
      <Slider
        v-if="model.values.length"
        :custom-options="customOptions"
        class="slider-pre-wrapper"
      >
        <template v-slot:slides>
          <div
            v-for="slide in model.values"
            :key="slide.id"
            :class="slide.mode"
            class="swiper-slide"
          >
            <picture class="image">
              <img :src="slide.image" :alt="slide.name" data-manual-lazy>
            </picture>
            <div v-if="slide.title" class="text text--16" v-html="slide.title" />
          </div>
        </template>
        <template v-slot:navigation>
          <div class="navigation d-show">
            <button type="button" class="navigation-btn swiper-button-prev" />
            <button type="button" class="navigation-btn swiper-button-next" />
          </div>
        </template>
      </Slider>
    </section>
  </div>
  </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'
import HeadTitle from '~/components/HeadTitle/HeadTitle'

export default {
  components: {
    Slider,
    HeadTitle,
    Section
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      customOptions: {
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          767: {
            slidesOffsetAfter: 90
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      GET_MQ: 'mediaQuery/GET_MQ'
    }),
    model() {
      return MODEL(this.info)
    }
  },
  created() {
    // center slides
    if (this.GET_MQ === 'desktop') {
      (this.customOptions || {}).initialSlide = Math.abs((this.model.values || []).length / 3)
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.slider-news {
  overflow: hidden;
  user-select: none;

  .slider-pre-wrapper {
    @include desktop {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }

  &::v-deep {
    .swiper-wrapper {
      @include desktop {
        // justify-content: center;
      }
    }
  }

  .head-title {
    margin-bottom: 6rem;
  }

  .navigation {
    .navigation-btn {
      position: absolute;
      width: 8rem;
      height: 8rem;
      background: $white;
      color: $black17;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      opacity: 1;
      z-index: 1;
      transition: background-color .2s ease, color .2s ease, opacity .2s ease;
      @include desktop {
        &:hover {
          color: $white;
          background-color: $brown;
        }
      }
      &.swiper-button-disabled {
        opacity: 0;
        pointer-events: none;
      }
      &.swiper-button-next {
        top: 9.5rem;
        right: -10vw;
        &::before {
          transform: rotate(45deg) translate3d(-2px, 2px, 0);
        }
      }
      &.swiper-button-prev {
        top: 9.5rem;
        left: -10vw;
        &::before {
          transform: rotate(-135deg) translate3d(-1px, 1px, 0);
        }
      }
      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 4px);
        left: calc(50% - 4px);
        padding: 4px;
        border: solid currentColor;
        border-width: 1px 1px 0 0;
      }
    }
  }

  .slider-pre-wrapper {
    position: relative;
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .image {
    position: relative;
    display: flex;
    margin-bottom: 1.5rem;
  }

  .swiper-slide {
    flex: 1 0 auto;
    width: 25rem;
    opacity: .3;
    transition: opacity .2s ease;
    &.swiper-slide-active {
      opacity: 1;
      @include tablet_desktop {
        & + .swiper-slide {
          opacity: 1;
          @include desktop {
            & + .swiper-slide {
              opacity: 1;
            }
          }
        }
      }
    }
    .image {
      width: 100%;
      height: 27rem;
    }
  }
}
</style>

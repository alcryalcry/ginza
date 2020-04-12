<template>
  <div class="slider-see-also">
    <Section class="section--gray">
      <div v-if="model.title" class="title text--24 bold" v-html="model.title" />
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
            <HousingCard :info="slide" :house-type="model.id" />
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
      <div class="link-wrapper">
        <nuxt-link v-if="model.url && model.linkLabel" class="link link--brown link--tdu" :to="localePath(model.url)" v-html="model.linkLabel" />
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'
import iconArrowCircle from '~/assets/svg/arrow-circle.svg'
import HousingCard from '~/components/Housing/Card/Card'

export default {
  components: {
    Slider,
    HousingCard,
    Section,
    iconArrowCircle
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
.slider-see-also {
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

  .title {
    margin-bottom: 7rem;
    text-align: center;
    letter-spacing: .5px;
    @include mobile {
      margin-bottom: 6rem;
    }
  }

  .link-wrapper {
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    @include mobile {
      margin-top: 6rem;
    }
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
      border: none;
      cursor: pointer;
      opacity: 1;
      z-index: 1;
      transition: background-color .2s ease, color .2s ease, opacity .2s ease;
      @include desktop {
        &:hover {
          background-color: $brown;
          color: $white;
        }
      }
      &.swiper-button-disabled {
        opacity: 0;
        pointer-events: none;
      }
      &.swiper-button-next {
        top: 9.5rem;
        right: -10vw;
        .icon {
          transform: rotate(180deg);
        }
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
    width: 30rem;
  }
}
</style>

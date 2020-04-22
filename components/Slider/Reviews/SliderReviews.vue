<template>
  <div class="slider-reviews">
    <Section class="section--no-p section--min section--apartment">
      <HeadTitleMini :info="model" />
    </Section>
    <Section class="section--no-p section--min container--relative">
      <Slider
        v-if="model.values.length"
        :custom-options="customOptions"
      >
        <template v-slot:slides>
          <div
            v-for="slide in model.values"
            :key="slide.id"
            :class="slide.mode"
            class="swiper-slide"
          >
            <ReviewsCard :info="slide" />
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
        <template v-slot:pagination>
          <div class="swiper-pagination" />
        </template>
      </Slider>
    </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'
import Slider from '~/components/Slider/Slider'
import ReviewsCard from '~/components/ReviewsCard/ReviewsCard'
import iconArrowCircle from '~/assets/svg/arrow-circle.svg'

export default {
  components: {
    HeadTitleMini,
    Section,
    Slider,
    ReviewsCard,
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
        slidesPerGroup: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          767: {
            slidesPerGroup: 1
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
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.slider-reviews {
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
    }
  }

  &::v-deep {
    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      padding: 3rem 0;
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

    .swiper-container {
      overflow: hidden;
      padding-right: 1rem;
      padding-left: 1rem;
      margin-left: -1rem;
      margin-right: -1rem;
    }
    .swiper-wrapper {
      display: flex;
      align-items: stretch;
    }
  }

  .swiper-slide {
    flex: 1 0 auto;
    width: calc(50% - 10px);
    @include mobile {
      width: 100%;
    }
  }
}
</style>

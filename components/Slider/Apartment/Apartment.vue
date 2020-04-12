<template>
  <div class="slider-apartment">
    <Slider
      v-if="model.values.length"
      :custom-options="customOptions"
    >
      <template v-slot:slides>
        <div
          v-for="slide in model.values"
          :key="slide.title"
          class="swiper-slide"
        >
          <div class="slider-main-slide">
            <picture class="image">
              <img data-manual-lazy :src="slide.image" :alt="slide.title">
            </picture>
          </div>
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
    <Section class="slider-actions">
      <div class="slider-actions-row">
        <button
          class="button button--arrow"
        >
          <div class="icon">
            <iconPlayButton />
          </div>
          <span class="text">{{ $t('apartment.showVideo') }}</span>
        </button>
        <button class="button">
          {{ $t('apartment.excursion') }}
        </button>
      </div>
    </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'
import iconArrowCircle from '~/assets/svg/arrow-circle.svg'
import iconPlayButton from '~/assets/svg/play-button.svg'

export default {
  name: 'SliderApartment',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Section,
    iconArrowCircle,
    iconPlayButton,
    Slider
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
        loop: true,
        speed: 400,
        parallax: true,
        spaceBetween: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
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
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  flex: 1 0 auto;
  width: 100%;
  @include desktop {
    width: 108rem;
  }
}
.slider-actions {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .slider-actions-row {
    display: flex;
    flex-flow: row wrap;
    margin: -1rem;
    .button {
      margin: 1rem;
    }
  }
}
.slider-apartment {
  position: relative;
  overflow: hidden;

  &::v-deep {
    .navigation {
      .navigation-btn {
        position: absolute;
        top: calc(50% - 4rem);
        width: 8rem;
        height: 8rem;
        background: $white;
        color: $black17;
        border-radius: 50%;
        border: none;
        overflow: hidden;
        cursor: pointer;
        opacity: 1;
        z-index: 1;
        transition: background-color .2s ease, color .2s ease, opacity .2s ease, border-color .2s ease;
        &:active {
          background-color: $brown;
          color: $white;
        }
        @include desktop {
          &:hover {
            background-color: $brown;
            color: $white;
          }
        }
        @include tablet {
          top: calc(50% - 3rem);
          width: 6rem;
          height: 6rem;
        }
        @include mobile {
          top: calc(50% - 3rem);
          width: 6rem;
          height: 6rem;
        }

        &.swiper-button-disabled {
          opacity: 0;
          pointer-events: none;
        }
        &.swiper-button-next {
          right: 7rem;
          @include tablet {
            right: $sectionOffsetHorizontalTablet;
          }
          @include mobile {
            right: $sectionOffsetHorizontalMobile;
          }
          .icon {
            transform: rotate(180deg);
          }
        }
        &.swiper-button-prev {
          left: 7rem;
          @include tablet {
            left: $sectionOffsetHorizontalTablet;
          }
          @include mobile {
            left: $sectionOffsetHorizontalMobile;
          }
        }
      }
    }
  }
}

.slider-main-slide {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  min-height: 90rem;
  overflow: hidden;
  @include tablet {
    min-height: 90vh
  }
  @include mobile {
    min-height: 70vh
  }

  .image {
    @include absolute;
    pointer-events: none;

    &::before {
      content: '';
      @include absolute;
      background: linear-gradient(180deg, rgba(50, 50, 50, 0.1) 55.68%, rgba(0, 0, 0, 0.80415) 96%);
      pointer-events: none;
      z-index: 1;
    }
  }
}
</style>

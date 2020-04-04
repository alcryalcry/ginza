<template>
  <div class="slider-features-big">
    <Slider
      v-if="model.values.length"
      :custom-options="customOptions"
      @active-index="setAactiveIndex"
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
          <Section class="section--min slider-text">
            <div class="content">
              <div v-if="slide.title" class="title text--24" data-swiper-parallax-y="-50" v-html="slide.title" />
              <div v-if="slide.description" class="description text--16" data-swiper-parallax-y="-50" v-html="slide.description" />
              <nuxt-link class="link link--white link--tdu" :to="localePath(slide.url)" v-html="slide.linkLabel" />
            </div>
          </Section>
        </div>
      </template>
      <template v-slot:navigation>
        <div class="navigation d-show">
          <button type="button" class="navigation-btn swiper-button-prev" />
          <button type="button" class="navigation-btn swiper-button-next" />
        </div>
        <Section class="section--big section--no-p">
          <div class="row navigation-row">
            <div class="col-4 d-show">
              <button type="button" class="navigation-btn swiper-button-prev text--12 ttu bold ls1">
                <span v-if="generatedNavigation.prev.name">
                  <span>{{ $t('slider.prev') }}</span>
                  <transition name="fade" mode="out-in">
                    <span :key="generatedNavigation.prev.name" class="name">{{ generatedNavigation.prev.name }}</span>
                  </transition>
                </span>
              </button>
            </div>
            <div class="col-4 col-t-12 col-m-12 jc-c">
              <transition name="fade" mode="out-in">
                <span v-if="generatedNavigation.current.name" :key="generatedNavigation.current.name" class="text--12 ttu bold ls1">
                  {{ generatedNavigation.current.name }}
                </span>
              </transition>
            </div>
            <div class="col-4 jc-fe d-show">
              <button type="button" class="navigation-btn swiper-button-next text--12 ttu bold ls1">
                <span v-if="generatedNavigation.next.name">
                  <transition name="fade" mode="out-in">
                    <span :key="generatedNavigation.next.name" class="name">{{ generatedNavigation.next.name }}</span>
                  </transition>
                  <span>{{ $t('slider.next') }}</span>
                </span>
              </button>
            </div>
          </div>
        </Section>
      </template>
      <template v-slot:pagination>
        <div class="swiper-pagination" />
      </template>
    </Slider>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'

export default {
  components: {
    Section,
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
      activeIndex: 0,
      customOptions: {
        effect: 'fade',
        speed: 700,
        loop: true,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          767: {
            spaceBetween: 40
          }
        }
      }
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    generatedNavigation() {
      return {
        prev: this.model.values[this.activeIndex - 1] || this.model.values[this.model.values.length - 1],
        current: this.model.values[this.activeIndex] || {},
        next: this.model.values[this.activeIndex + 1] || this.model.values[0]
      }
    }
  },
  mounted() {},
  methods: {
    setAactiveIndex(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-features-big {
  overflow: hidden;
  user-select: none;
  padding-bottom: 4rem;

  &::v-deep {
    .swiper-container {
      position: relative;
    }
    .swiper-slide {
      position: relative;
      flex: 1 0 auto;
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      min-height: 50rem;
      @include desktop {
        min-height: 70rem;
      }
    }
  }

  .image {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(50, 50, 50, 0.1) 55.68%, rgba(0, 0, 0, 0.80415) 96%);
      pointer-events: none;
      z-index: 1;
    }
  }

  .slider-text {
    position: relative;
    margin-top: auto;
    z-index: 1;
    @include desktop {
      padding-left: 16rem;
    }

    .content {
      max-width: 40rem;
      color: $white;
    }

    .title {
      margin-bottom: 2rem;
      font-weight: $bold;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }

    .description {
      line-height: 1.5;
      letter-spacing: 0.075rem;
      margin-bottom: 3rem;
    }

    .link {
      position: relative;
      z-index: 1;
      // &:active {
      //   color: $white;
      //   text-decoration-color: transparent;
      // }
      // @include desktop {
      //   &:hover {
      //     color: $white;
      //     text-decoration-color: transparent;
      //   }
      // }
    }
  }

  &::v-deep {
    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      @include mobile {
        padding-top: 2rem;
      }
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

  .navigation-row {
    padding: 3rem 0;
    @include tablet {
      justify-content: center;
    }
    @include mobile {
      padding: 2rem 0 1rem;
    }
    .navigation-btn {
      cursor: pointer;
      .name {
        color: $border
      }
      &.swiper-button-prev {
        .name::before {
          content: '/';
          display: inline-block;
          padding: 0 .5rem;
        }
      }
      &.swiper-button-next {
        .name::after {
          content: '/';
          display: inline-block;
          padding: 0 .5rem;
        }
      }
    }
    > * {
      display: flex;
      &.jc-c {
        justify-content: center;
      }
      &.jc-fe {
        justify-content: flex-end;
      }
    }
  }

  &::v-deep {
    .navigation {
      .navigation-btn {
        position: absolute;
        top: calc(50% - 4rem);
        width: 8rem;
        height: 8rem;
        background: transparent;
        border: 1px solid $white;
        color: $white;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        opacity: 1;
        z-index: 1;
        transition: background-color .2s ease, color .2s ease, opacity .2s ease;
        @include desktop {
          &:hover {
            color: $black17;
            background-color: $white;
          }
        }
        &.swiper-button-disabled {
          opacity: 0;
          pointer-events: none;
        }
        &.swiper-button-next {
          right: 7rem;
          &::before {
            transform: rotate(45deg) translate3d(-2px, 2px, 0);
          }
        }
        &.swiper-button-prev {
          left: 7rem;
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
  }
}
</style>

<template>
  <div class="slider-features-big">
    <div v-if="model.slides.length" ref="mySwiper" v-swiper:mySwiper="options" @slideChange="aaa($event)">
      <div class="swiper-wrapper">
        <div
          v-for="slide in model.slides"
          :key="slide.id"
          :class="slide.mode"
          class="swiper-slide"
        >
          <picture class="image">
            <img :src="slide.image" :alt="slide.name">
          </picture>
          <Section class="section--min slider-text">
            <div class="content" data-swiper-parallax="-400">
              <div v-if="slide.title" class="title text--24" v-html="slide.title" />
              <div v-if="slide.description" class="description text--16" v-html="slide.description" />
              <nuxt-link class="link link--white link--tdu" :to="localePath(slide.url)" v-html="slide.linkLabel" />
            </div>
          </Section>
        </div>
      </div>
      <div class="navigation d-show">
        <button type="button" class="navigation-btn swiper-button-prev" />
        <button type="button" class="navigation-btn swiper-button-next" />
      </div>
      <Section class="section--big section--no-p">
        <div class="row navigation-row d-show">
          <div class="col-4">
            <button type="button" class="navigation-btn swiper-button-prev text--12 ttu bold ls1">
              <transition name="fade" mode="out-in">
                <span v-if="generatedNavigation.prev.name" :key="generatedNavigation.prev.name">
                  <span>{{ $t('slider.prev') }}</span>
                  <span class="name">{{ generatedNavigation.prev.name }}</span>
                </span>
              </transition>
            </button>
          </div>
          <div class="col-4 jc-c">
            <transition name="fade" mode="out-in">
              <span v-if="generatedNavigation.current.name" :key="generatedNavigation.current.name" class="text--12 ttu bold ls1">
                {{ generatedNavigation.current.name }}
              </span>
            </transition>
          </div>
          <div class="col-4 jc-fe">
            <button type="button" class="navigation-btn swiper-button-next text--12 ttu bold ls1">
              <transition name="fade" mode="out-in">
                <span v-if="generatedNavigation.next.name" :key="generatedNavigation.next.name">
                  <span class="name">{{ generatedNavigation.next.name }}</span>
                  <span>{{ $t('slider.next') }}</span>
                </span>
              </transition>
            </button>
          </div>
        </div>
      </Section>
      <div class="swiper-pagination" />
    </div>
  </div>
  </Section>
  </div>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'

export default {
  components: {
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
      activeIndex: 0,
      options: {
        threshold: 10,
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: false,
        speed: 700,
        parallax: true,
        pagination: {
          el: '.swiper-pagination'
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
    swiper() {
      return (this.$refs.mySwiper || {}).swiper || {}
    },
    generatedNavigation() {
      return {
        prev: this.model.slides[this.activeIndex - 1] || {},
        current: this.model.slides[this.activeIndex] || {},
        next: this.model.slides[this.activeIndex + 1] || {}
      }
    }
  },
  mounted() {},
  methods: {
    aaa() {
      this.activeIndex = this.swiper.activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-features-big {
  overflow: hidden;
  user-select: none;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    position: relative;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    min-height: 70rem;
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
    padding-left: 16rem;
    z-index: 1;

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
      &:active {
        color: $white;
        text-decoration-color: transparent;
      }
      @include desktop {
        &:hover {
          color: $white;
          text-decoration-color: transparent;
        }
      }
    }
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    .swiper-pagination-bullet {
      display: flex;
      width: 1rem;
      height: 1rem;
      border: 1px solid $border;
      border-radius: 50%;
      transition: border-color .2s ease, background-color .2s ease;
      &.swiper-pagination-bullet-active {
        border-color: $brown;
        background-color: $brown;
      }
    }
  }

  .navigation-row {
    padding: 3rem 0;
    .navigation-btn {
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
          // color: $white;
          // background-color: $brown;
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
</style>

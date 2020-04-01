<template>
  <div class="slider-main">
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
            <Section class="content section--no-p" data-swiper-parallax="-400">
              <div class="labels">
                <div v-if="slide.city" class="text--13 city" v-html="slide.city" />
                <div v-if="slide.category" class="text--13 category" v-html="slide.category" />
              </div>
              <div class="title title--main">{{ slide.title }}</div>
              <div class="slider-main-link">
                <nuxt-link class="text--16" :to="localePath(slide.url)" v-html="slide.linkLabel" />
              </div>
            </Section>
          </div>
        </div>
      </template>
    </Slider>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'

export default {
  name: 'SliderMain',
  components: {
    Section,
    Slider
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
        autoplay: true,
        loop: true,
        speed: 700,
        parallax: true,
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
}
.slider-main {
  overflow: hidden;
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

  .content {
    position: relative;
    margin-top: auto;
    padding: 7rem 0 14rem;
    color: white;
    z-index: 2;
    @include mobile {
      padding-bottom: 7rem;
    }
  }

  .title {
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  .slider-main-link {
    a {
      display: inline-flex;
      border-bottom: 1px solid;
      color: $white;
      transition: border-color .2s ease;
      &:active {
        border-color: transparent;
      }
      @include desktop {
        &:hover {
          border-color: transparent;
        }
      }
    }
  }

  .labels {
    display: flex;
    margin-bottom: 1rem;
    letter-spacing: .1rem;
    .city {
      font-weight: $bold;
    }
    .category {
      margin-left: .75rem;
      font-weight: $bold;
      &::before {
        content: '/';
        display: inline-block;
        margin-right: .75rem;
      }
    }
  }

  .image {
    position: absolute;
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
}
</style>

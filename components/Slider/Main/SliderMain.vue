<template>
  <div class="slider-main">
    <Slider
      v-if="model.values.length"
      :custom-options="customOptions"
    >
      <template v-slot:slides>
        <div
          v-for="(slide, index) in model.values"
          :key="slide.title"
          class="swiper-slide"
        >
          <div class="slider-main-slide">
            <picture class="image">
              <img data-manual-lazy :src="slide.image" :alt="slide.title">
            </picture>
            <Section class="content section--no-p section--min" data-swiper-parallax="-400">
              <div class="labels">
                <div v-if="slide.city" class="text--13 city" v-html="slide.city" />
                <div v-if="slide.category" class="text--13 category" v-html="slide.category" />
              </div>
              <div class="title title--main">{{ slide.title }}</div>
              <div class="slider-main-link">
                <nuxt-link class="text--16" :to="localePath(path[index])" v-html="slide.linkLabel" />
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
      default: () => ({})
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
    },
    path() {
      return this.model.values.map((item) => {
        const url = item.url.charAt(0) === '/' ? item.url : '/' + item.url
        return {
          path: url
        }
      })
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

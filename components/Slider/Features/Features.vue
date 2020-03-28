<template>
  <div class="slider-features">
    <Section>
      <HeadTitle :info="model" />
      <div v-if="model.slides.length" v-swiper:mySwiper="options">
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
            <div v-if="slide.name" class="text text--16" v-html="slide.name" />
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitle from '~/components/HeadTitle/HeadTitle'

export default {
  components: {
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
      options: {
        threshold: 10,
        slidesPerView: 'auto',
        spaceBetween: 80,
        loop: false,
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
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.slider-features {
  overflow: hidden;
  user-select: none;

  .head-title {
    margin-bottom: 6rem;
    /deep/.content {
      padding: 0;
    }
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
    &.vertical {
      width: 30rem;
      @include mobile {
        width: 33.5rem;
      }
      .image {
        width: 100%;
        height: 46rem;
        @include mobile {
          height: 36rem;
        }
      }
    }
    &.horizontal {
      width: 54rem;
      @include mobile {
        width: 33.5rem;
      }
      .image {
        width: 100%;
        height: 37rem;
        @include mobile {
          height: 36rem;
        }
      }
    }
  }
}
</style>

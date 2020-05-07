<template>
  <Section class="section--1440 slider-features">
    <Section class="section--no-p" :class="model.mode">
      <HeadTitle v-if="model.title" :info="model" />
    </Section>
    <Section class="section--no-p slider-section" :class="model.modeSlider">
      <HeadTitle v-if="model.beforeText" :info="{ description: model.beforeText, url: false }" />
      <Slider
        v-if="model.values.length"
        :custom-options="customOptions"
      >
        <template v-slot:slides>
          <component
            :is="slide.slug ? 'nuxt-link' : 'div'"
            v-for="slide in model.values"
            :key="slide.id"
            :to="slide.slug ? localePath({ name: 'restaurants-slug', params: { slug: slide.slug } }) : false"
            :class="slide.mode"
            class="swiper-slide"
          >
            <picture class="image">
              <img :src="slide.image" :alt="slide.name" data-manual-lazy>
            </picture>
            <div v-if="slide.name" class="text text--16" v-html="slide.name" />
          </component>
        </template>
      </Slider>
      <HeadTitle v-if="model.afterText" :info="{ description: model.afterText, url: false }" />
    </Section>
    <Section v-if="model.services" class="section--no-p section--big">
      <ServicesList :info="model.services" />
    </Section>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitle from '~/components/HeadTitle/HeadTitle'
import Slider from '~/components/Slider/Slider'
import ServicesList from '~/components/Services/List/ServicesList'

export default {
  components: {
    HeadTitle,
    Section,
    ServicesList,
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
        spaceBetween: 80,
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
  mounted() {
    console.log(this.$router.options.routes)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.slider-features {
  overflow: hidden;

  .head-title {
    margin-bottom: 6rem;
    &::v-deep {
      .content {
        padding: 0;
      }
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

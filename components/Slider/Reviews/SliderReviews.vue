<template>
  <div class="slider-reviews">
    <Section class="section--no-p section--min section--apartment">
      <HeadTitleMini :info="model" />
    </Section>
    <Section class="section--no-p section--min container--relative">
      <Slider
        v-if="model.values.length"
        :custom-options="customOptions"
        :has-navigation="true"
        :has-pagination="true"
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

export default {
  components: {
    HeadTitleMini,
    Section,
    Slider,
    ReviewsCard
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

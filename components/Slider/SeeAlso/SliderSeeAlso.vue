<template>
  <div class="slider-see-also">
    <Section class="section--gray">
      <div v-if="model.title" class="title text--24 bold" v-html="model.title" />
      <Slider
        v-if="model.values.length"
        :custom-options="customOptions"
        :has-navigation="true"
        :is-centered-slides="true"
        navigation-mode="navigation--white"
        class="slider-pre-wrapper"
      >
        <template v-slot:slides>
          <div
            v-for="slide in model.values"
            :key="slide.id"
            :class="slide.mode"
            class="swiper-slide"
          >
            <HousingCard :info="slide" :is-nested="true" />
          </div>
        </template>
      </Slider>
      <div class="link-wrapper">
        <ExternalLink v-if="model.url && model.linkLabel" class="link link--brown link--tdu" :to="model.url" v-html="model.linkLabel" />
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'
import HousingCard from '~/components/Housing/Card/HousingCard'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    ExternalLink,
    Slider,
    HousingCard,
    Section
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
        loop: false,
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
      &.swiper-button-next {
        top: 15rem;
        right: -10vw;
      }
      &.swiper-button-prev {
        top: 15rem;
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

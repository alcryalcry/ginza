<template>
  <Section class="section--full slider-instagram">
    <Section class="section--no-p">
      <HeadTitle class="" :info="model" />
    </Section>
    <Section class="section--no-p section--full">
      <Slider
        v-if="model.values.length"
        :custom-options="customOptions"
        class="slider-pre-wrapper"
      >
        <template v-slot:slides>
          <a
            v-for="slide in model.values"
            :key="slide.id"
            :href="slide.url"
            :class="slide.mode"
            target="_blank"
            class="swiper-slide"
          >
            <picture class="image">
              <img :src="slide.image" :alt="slide.name" data-manual-lazy>
            </picture>
            <div class="icon">
              <iconInstagram />
            </div>
          </a>
        </template>
      </Slider>
    </Section>
  </Section>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'
import HeadTitle from '~/components/HeadTitle/HeadTitle'
import iconInstagram from '~/assets/svg/social/instagram.svg'

export default {
  components: {
    Slider,
    HeadTitle,
    Section,
    iconInstagram
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
        loop: true
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
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.slider-instagram {
  overflow: hidden;
  user-select: none;

  &::v-deep {
    .swiper-wrapper {
      @include desktop {
        // justify-content: center;
      }
    }
  }

  .head-title {
    margin-bottom: 6rem;
  }

  .slider-pre-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .image {
    position: relative;
    display: flex;
    margin-bottom: 1.5rem;
  }

  .swiper-slide {
    position: relative;
    flex: 1 0 auto;
    width: 30rem;
    height: 30rem;
    .image {
      width: 100%;
      height: 100%;
    }
    .icon {
      position: absolute;
      left: 1.5rem;
      bottom: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
      color: $white;
      pointer-events: none;
    }
  }
}
</style>

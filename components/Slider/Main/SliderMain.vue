<template>
  <div class="slider-main">
    <Slider
      v-if="generatedSlides.length"
      :custom-options="customOptions"
      :has-navigation="true"
      navigation-mode="navigation--white navigation--basic"
      @active-index="activeIndex = $event"
    >
      <template v-slot:slides>
        <ExternalLink
          v-for="(slide, index) in generatedSlides"
          :key="index"
          :to="slide.url"
          class="swiper-slide"
          :class="slide.type"
        >
          <template v-if="slide.type === 'video' && slide.videoSrc">
            <VideoPreview :key="videoKeys[index]" :info="slide" />
          </template>
          <div v-else class="slider-main-slide">
            <picture class="image">
              <app-image data-not-lazy :src="slide.image || slide.preview" :alt="slide.name" /></picture>
            <Section class="content section--no-p section--min" data-swiper-parallax="-400">
              <div class="labels">
                <div v-if="slide.city" class="text--13 city" v-html="slide.city" />
                <div v-if="slide.category" class="text--13 category" v-html="slide.category" />
              </div>
              <div class="title title--main">{{ slide.name }}</div>
              <div class="slider-main-link">
                <ExternalLink class="text--16" :to="slide.url" v-html="$t('slider.show')" />
              </div>
            </Section>
          </div>
        </ExternalLink>
      </template>
    </Slider>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'
import ExternalLink from '~/components/ExternalLink/ExternalLink'
import VideoPreview from '~/components/VideoPreview/VideoPreview'

export default {
  name: 'SliderMain',
  components: {
    ExternalLink,
    Section,
    Slider,
    VideoPreview
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
      videoKeys: [],
      customOptions: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true,
        parallax: true,
        initialSlide: 0,
        slidesPerView: 1
      }
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    generatedSlides() {
      return this.model.values.map((slide) => {
        if (slide.type === 'video' && slide.videoSrc) {
          return {
            ...slide,
            videoSrc: `${slide.videoSrc}?byline=0&portrait=0&title=0&controls=0&autoplay=1&muted=1`
          }
        }
        return {
          ...slide
        }
      })
    }
  },
  watch: {
    activeIndex(val, prev) {
      if (this.generatedSlides[prev].type === 'video') {
        setTimeout(() => {
          this.$set(this.videoKeys, prev, +new Date())
        }, 700)
      }
    }
  },
  created() {
    if (process.browser) {
      this.videoKeys = this.generatedSlides.map((slide, index) => {
        if (slide.type === 'video' && slide.videoSrc) {
          return index
        }
        return null
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  flex: 1 0 auto;
  width: 100%;
  &.video {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    min-height: 90rem;
    height: 100%;
    @include tablet {
      min-height: 90vh
    }
    @include mobile {
      min-height: 70vh
    }
    .video {
      flex: 1 1 auto;
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      height: auto;
      @include mobile {
        height: 70vh;
      }
      &::v-deep {
        .video-container {
          flex: 1;
          display: flex;
          flex-flow: column nowrap;
          width: auto;
          height: auto;
          background: rgba($brown, .75)
        }
        .video-preview {
          flex: 1;
          display: flex;
          flex-flow: column nowrap;
          align-items: stretch;
          &::before {
            width: 4rem;
            height: 4rem;
            left: 50%;
            top: 50%;
            right: auto;
            bottom: auto;
            transform: translate3d(-50%, -50%, 0);
          }
        }
        .image {
          flex: 1;
          display: flex;
          flex-flow: column nowrap;
          width: auto;
          height: auto;
          img {
            flex: 1;
            width: auto;
            height: auto;
          }
        }
        .iframe {
          pointer-events: none;
        }
      }
    }
  }
}
.slider-main {
  position: relative;
  overflow: hidden;
  &::v-deep {
    .swiper-wrapper {
      align-items: stretch;
    }
    .swiper-slide {
      display: flex;
      align-items: stretch;
    }
  }
}
.slider-main-slide {
  position: relative;
  flex: 1;
  width: 100px;
  display: flex;
  flex-flow: column nowrap;
  height: 90rem;
  max-height: 100vh;
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

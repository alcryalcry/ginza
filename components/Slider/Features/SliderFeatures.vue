<template>
  <Section class="section--1440 slider-features">
    <Section class="section--no-p" :class="model.mode">
      <HeadTitle v-if="model.title" :info="model" />
    </Section>
    <Section class="section--no-p slider-section" :class="model.modeSlider">
      <HeadTitle v-if="model.beforeText" :info="{ description: model.beforeText, url: false }" />
      <div v-if="model.hasTabs && model.values.length" class="tabs">
        <div class="tabs-content">
          <button
            v-for="item in model.values"
            :key="item.id"
            :class="{ isActive: item.id === activeId }"
            class="tabs-item"
            type="button"
            @click="setActiveId(item.id)"
          >
            <div v-if="item.name" class="name ttu text--24 bold" v-html="item.name" />
            <ExternalLink v-if="item.linkLabel" class="link link--brown link--tdu" :to="item.url" v-html="item.linkLabel" />
          </button>
        </div>
      </div>
      <transition mode="out-in" name="list-fade">
        <Slider
          v-if="model.hasTabs ? activeSlider.id : model.values.length"
          :key="activeId"
          :custom-options="customOptions"
        >
          <template v-slot:slides>
            <component
              :is="slide.url ? 'ExternalLink' : 'div'"
              v-for="slide in model.hasTabs ? activeSlider.slides : model.values"
              :key="slide.id"
              :to="slide.url || false"
              :class="slide.mode"
              class="swiper-slide"
            >
              <picture class="image">
                <app-image :src="slide.image || slide.preview" :alt="slide.name" data-manual-lazy />
              </picture>
              <div v-if="slide.name" class="text text--16" v-html="slide.name" />
            </component>
          </template>
        </Slider>
      </transition>
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
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    ExternalLink,
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
      activeId: null,
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
    },
    activeSlider() {
      return ((this.model.values || []).find(item => item.id === this.activeId) || {})
    }
  },
  mounted() {
    if (this.model.hasTabs) {
      this.activeId = (this.model.values[0] || {}).id
    }
  },
  methods: {
    setActiveId(id) {
      this.activeId = id
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-features {
  overflow: hidden;

  .tabs {
    margin: 0 -5rem;
    margin-bottom: 6rem;
    overflow: hidden;
    @include tablet {
      padding: 0 3rem;
      margin: 0 -3rem 4rem;
    }
    @include mobile {
      padding: 0 2rem;
      margin: 0 -2rem 4rem;
    }
    .tabs-content {
      display: flex;
      flex-flow: row nowrap;
      overflow-x: auto;
      padding: 2rem 0;
      @include desktop {
        padding-right: 5rem;
        padding-left: 5rem;
      }
    }
    .tabs-item {
      display: flex;
      flex-flow: column nowrap;
      white-space: nowrap;
      margin: 0 5rem;
      color: $gray69;
      transition: color .2s ease;
      &:active {
        color: $black17;
      }
      @include desktop {
        &:hover {
          color: $black17;
        }
      }
      @include tablet {
        margin: 0 3rem;
      }
      @include mobile {
        margin: 0 2rem;
      }
      &:first-child {
        margin-left: 0;
      }
      &.isActive {
        color: $black17;
        .link {
          opacity: 1;
          pointer-events: auto;
        }
      }
      .link {
        display: inline-block;
        margin-top: 1.5rem;
        opacity: 0;
        pointer-events: none;
        transition: .2s ease;
      }
    }
  }

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
        width: 30rem;
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
        width: 30rem;
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

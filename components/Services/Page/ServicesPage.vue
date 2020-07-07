<template>
  <Section class="section--1440 services-page">
    <div
      v-for="(item, index) in model.values"
      :key="item.title + index"
      class="services-item"
      :style="{ color: item.color }"
      :class="{ isInverted: item.isInverted }"
    >
      <div v-if="item.image" class="image-block">
        <picture class="image">
          <app-image :src="item.image" alt="" /></picture>
        <div v-if="item.tag" class="tag text--14 ttu">
          <span v-html="item.tag" />
        </div>
      </div>
      <Section class="services-item-content">
        <div class="content">
          <h2 v-if="item.title" class="title--main ttu light" v-html="item.title" />
          <p v-if="item.description" class="description text--16" v-html="item.description" />
          <div class="link-block">
            <ExternalLink
              v-if="item.url && item.linkLabel"
              class="link link--brown link--tdu"
              :to="item.url"
              :target="arrows[index] ? '_blank' : ''"
              @is-external="showArrow"
              v-html="item.linkLabel"
            />
            <div v-if="arrows[index]" class="arrow">
              <iconArrow class="icon" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import ExternalLink from '~/components/ExternalLink/ExternalLink'
import iconArrow from '~/assets/svg/arrow.svg'

export default {
  components: {
    Section,
    ExternalLink,
    iconArrow
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      arrows: []
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  methods: {
    showArrow(val) {
      this.arrows.push(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.services-page {
  .link-block {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 3rem;
    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 4rem;
      border-radius: 50%;
      border: 1px solid $border;
      width: 5.4rem;
      height: 5.4rem;
      padding: 1.9rem;
      transition: color .2s ease, background-color .2s ease, border-color .2s ease;
      @include mobile {
        top: calc(50% - 2rem);
        right: 0;
        width: 4rem;
        height: 4rem;
        padding: 1.2rem;
      }

      .icon {
        transform: rotate(-45deg);
      }
    }
  }

  .services-item {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    color: transparent;
    @include mobile_tablet {
      overflow: hidden;
    }
    @include desktop {
      flex-flow: row nowrap;
      align-items: center;
      min-height: 75rem;
    }
    & + .services-item {
      margin-top: 8rem;
      @include tablet {
        margin-top: 16rem;
      }
      @include desktop {
        margin-top: 30rem;
      }
    }
    &.isInverted {
      .services-item-content {
        @include mobile_tablet {
          &::before {
            right: auto;
            left: 0;
            transform: translate3d(-42%, -50%, 0)
          }
        }
      }
      .content {
        margin-left: 0;
      }
      .image-block {
        left: auto;
        right: 0;
      }
      &::before {
        right: auto;
        left: 0;
        transform: translate3d(-42%, -50%, 0)
      }
      .tag {
        @include desktop {
          left: -3rem;
          right: auto;
        }
      }
    }
    &::before {
      position: absolute;
      top: 50%;
      right: 0;
      width: 97rem;
      height: 97rem;
      border-radius: 50%;
      background: currentColor;
      transform: translate3d(42%, -50%, 0);
      pointer-events: none;
      @include desktop {
        content: '';
      }
    }
  }
  .services-item-content {
    flex: 1;
    @include mobile_tablet {
      position: relative;
    }
    &::before {
      position: absolute;
      top: 50%;
      right: 0;
      width: 36rem;
      height: 36rem;
      border-radius: 50%;
      background: currentColor;
      transform: translate3d(42%, -50%, 0);
      pointer-events: none;
      z-index: -1;
      @include tablet {
        width: 42rem;
        height: 42rem;
      }
      @include mobile_tablet {
        content: '';
      }
    }
  }
  .content {
    position: relative;
    max-width: 46rem;
    color: $black17;
    z-index: 1;
    @include desktop {
      margin-left: auto;
    }
  }
  .description {
    margin-top: 3rem;
    line-height: 2.4rem;
  }
  .image-block {
    @include desktop {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .image {
    display: flex;
    width: 100%;
    height: 36rem;
    @include tablet {
      height: 50rem;
    }
    @include desktop {
      width: 63rem;
      height: 75rem;
    }
    img {
      object-fit: cover;
    }
  }
  .tag {
    position: relative;
    display: inline-flex;
    padding: 2rem $sectionOffsetHorizontalMobile 0;
    color: $black17;
    @include tablet {
      padding: 2rem $sectionOffsetHorizontalTablet 0;
    }
    @include desktop {
      position: absolute;
      bottom: 2rem;
      right: -3rem;
      padding: 0;
      transform: rotate(180deg);
    }
    &::after {
      content: '';
      position: absolute;
      top: 2.75rem;
      left: calc(100% + 4.5rem);
      height: 1px;
      width: 4.5rem;
      background: $black17;
      @include desktop {
        top: calc(100% + 4.5rem);
        left: 0.75rem;
        width: 1px;
        height: 4.5rem;
      }
    }
    span {
      @include desktop {
        writing-mode: vertical-rl;
      }
    }
  }
}
</style>

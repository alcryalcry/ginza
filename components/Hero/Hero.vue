<template>
  <div class="hero">
    <picture class="image">
      <img :src="model.image" :alt="model.title">
    </picture>
    <Section class="content section--no-p">
      <div class="labels">
        <div v-if="model.city" class="text--13 city" v-html="model.city" />
        <div v-if="model.category" class="text--13 category" v-html="model.category" />
      </div>
      <div class="title title--hero">{{ model.title }}</div>
      <div class="hero-link">
        <nuxt-link class="text--16" :to="localePath(model.url)" v-html="model.linkLabel" />
      </div>
    </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'

export default {
  components: {
    Section
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  min-height: 90rem;
  overflow: hidden;
  @include tablet {
    min-height: 90vh
  }
  @include mobile {
    min-height: 90vh
  }

  .content {
    position: relative;
    margin-top: auto;
    padding: 7rem 0 14rem;
    color: white;
    z-index: 2;
  }

  .title {
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  .hero-link {
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
      font-weight: $medium;
    }
    .category {
      margin-left: .75rem;
      font-weight: $medium;
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

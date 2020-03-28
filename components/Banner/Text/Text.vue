<template>
  <Section>
    <div class="banner-text">
      <div class="col">
        <div v-if="model.title" class="title title--h2" v-html="model.title" />
        <nuxt-link class="link link--brown link--tdu" :to="localePath(model.url)" v-html="model.linkLabel" />
      </div>
      <div class="description">
        <p v-if="model.description" class="text--24" v-html="model.description" />
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'

export default {
  name: 'BannerText',
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
.banner-text {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @include mobile {
    display: block;
  }

  @include desktop {
    padding: 6rem 0 0 12rem;
  }

  .col {
    flex: 1 1 auto;
    @include tablet {
      padding-right: 2rem;
    }
    @include desktop {
      padding-right: 4rem;
    }
  }

  .title {
    margin-bottom: 3rem;
    @include mobile {
      margin-bottom: 1rem;
    }
  }

  .description {
    flex: 0 0 auto;
    padding-top: 7rem;
    max-width: 38rem;
    @include tablet {
      max-width: 34rem;
    }
    @include mobile {
      display: block;
      padding-top: 4rem;
    }
  }
}
</style>

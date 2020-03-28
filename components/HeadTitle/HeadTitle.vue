<template>
  <div class="head-title">
    <div class="content">
      <div v-if="model.title" class="title title--h2" v-html="model.title" />
      <nuxt-link class="link link--brown link--tdu" :to="localePath(model.url)" v-html="model.linkLabel" />
    </div>
    <div v-if="model.description" class="description">
      <p class="text--24" v-html="model.description" />
    </div>
  </div>
</template>

<script>
import MODEL from './model'

export default {
  name: 'HeadTitle',
  components: {
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
.head-title {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @include mobile {
    display: block;
  }
  &.isShort {
    @include desktop {
      padding-left: 12rem;
    }
    .content {
      @include tablet {
        padding-right: 2rem;
      }
      @include desktop {
        padding-right: 4rem;
      }
    }
  }

  .content {
    flex: 1 1 auto;
    max-width: 50rem;
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

<template>
  <div class="grid-item">
    <div class="grid-content">
      <picture v-if="model.image || model.preview" class="image">
        <app-image :src="model.image || model.preview" alt="" /></picture>
      <div v-if="model.label" class="label text--12 ttu regular" v-html="model.label" />
      <h5 v-if="model.title" class="title text--20 regular" v-html="model.title" />
      <div class="grid-link">
        <ExternalLink
          v-if="model.url"
          class="link link--brown link--tdu"
          :to="model.url"
          v-html="$t('blog.linkLabel')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MODEL from './model'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    ExternalLink
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
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
.grid-item {
  flex: 0 0 50%;
  padding: 5rem 9rem;
  @include tablet {
    padding: 4rem 2rem;
  }
  @include mobile {
    padding: 4rem 0;
  }
  &.size-half {
    flex: 0 0 50%;
    @include mobile {
      flex: 0 0 100%;
    }
  }
  &.size-full {
    flex: 0 0 100%;
    .image {
      height: 47rem;
      @include mobile {
        height: 36rem;
      }
    }
  }
  .title {
    margin: 0 auto;
    text-align: center;
  }
  .grid-link {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 2.5rem;
    @include mobile_tablet {
      margin-top: 1.5rem;
    }
  }
  .image {
    display: flex;
    width: 100%;
    height: 36rem;
    margin-bottom: 3rem;
    @include mobile_tablet {
      margin-bottom: 2rem;
    }
  }
  .label {
    margin-bottom: .5rem;
    font-size: 1rem;
    line-height: 1.25;
    text-align: center;
    color: $gray69;
    letter-spacing: 0.2rem;
  }
}
</style>

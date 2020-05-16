<template>
  <div class="head-title" :class="{ isArrow: model.url && !model.linkLabel }">
    <div class="content">
      <div class="title title--h2">
        <p v-if="model.title" v-html="model.title" />
        <nuxt-link v-if="model.url && !model.linkLabel" class="head-title-link" :to="localePath(model.url)">
          <iconArrow class="icon" />
        </nuxt-link>
      </div>
      <div v-if="model.subtext" class="subtext">
        <p class="text--16" v-html="model.subtext" />
      </div>
      <nuxt-link v-if="model.url && model.linkLabel" class="link link--brown link--tdu" :to="localePath(model.url)" v-html="model.linkLabel" />
      <div v-if="model.links.length" class="links">
        <nuxt-link v-for="(link, index) in model.links" :key="link.url + index" class="link link--brown link--tdu" :to="localePath(linksPath[index])" v-html="link.linkLabel" />
      </div>
    </div>
    <div v-if="model.description || model.features.values" class="description">
      <p v-if="model.description" class="text--24" v-html="model.description" />
      <FeaturesList v-if="model.features.values" :is-one-col="true" :info="model.features" />
    </div>
  </div>
</template>

<script>
import MODEL from './model'
import iconArrow from '~/assets/svg/arrow.svg'
import FeaturesList from '~/components/Features/List/FeaturesList'

export default {
  name: 'HeadTitle',
  components: {
    iconArrow,
    FeaturesList
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
    },
    linksPath() {
      return this.model.links.map((item) => {
        const url = item.url.charAt(0) === '/' ? item.url : '/' + item.url
        return {
          path: this.$route.path + url
        }
      })
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
      padding-left: 8rem;
    }
    .content {
      @include tablet {
        padding-right: 2rem;
      }
      @include desktop {
        padding-right: 8rem;
      }
    }
  }
  &.isArrow {
    .title {
      padding-right: 16rem;
      @include mobile {
        padding-right: 4rem;
      }
    }
  }

  .features-list {
    &::v-deep {
      .list {
        padding-right: 0;
      }
      .container {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  .links {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    @include mobile {
      margin-top: 4rem;
    }
    .link {
      & + .link {
        margin-top: 2rem;
      }
    }
  }

  .content {
    flex: 1 1 auto;
    max-width: 50rem;
  }

  .title {
    position: relative;
    margin-bottom: 3rem;
    @include mobile {
      padding-right: 0;
      // padding-right: 4rem;
      margin-bottom: 1rem;
    }
  }

  .head-title-link {
    position: absolute;
    top: calc(50% - 2.7rem);
    right: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid $border;
    width: 5.4rem;
    height: 5.4rem;
    padding: 1.9rem;
    transition: color .2s ease, background-color .2s ease, border-color .2s ease;
    @include desktop {
      &:hover {
        color: $white;
        border-color: $brown;
        background-color: $brown;
      }
    }
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

  .subtext {
    margin: 6rem 0 4rem;
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

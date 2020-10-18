<template>
  <div class="head-title" :class="{ isArrow: model.isArrow }">
    <div class="content">
      <div class="title title--h2">
        <p v-if="model.title" v-html="model.title" />
        <template v-if="url">
          <ExternalLink v-if="model.isArrow" :to="url" class="head-title-link">
            <iconArrow class="icon" />
          </ExternalLink>
        </template>
        <template v-else>
          <div v-if="model.isArrow" class="head-title-link">
            <iconArrow class="icon" />
          </div>
        </template>
      </div>
      <div v-if="model.subtext" class="subtext">
        <p class="text--16" v-html="model.subtext" />
      </div>
      <ExternalLink
        v-if="model.url"
        class="link link--brown link--tdu"
        :to="model.url"
        v-html="model.linkLabel || $t('slider.show')"
      />
      <div v-if="model.links.length" class="links">
        <ExternalLink
          v-for="(link, index) in model.links"
          :key="link.url + index"
          class="link link--brown link--tdu"
          :to="link.url"
          v-html="link.linkLabel"
        />
      </div>
    </div>
    <div v-if="model.description || model.features.values" class="description">
      <p v-if="model.description" :class="bigTitle ? 'title title--h2' : 'text--24'" v-html="model.description" />
      <button
        v-if="model.popup && model.popup.content"
        class="popup-btn link link--brown link--tdu"
        @click="openPopup(model.popup)"
      >
        <span class="text">{{ $t('popup.manager') }}</span>
      </button>
      <p v-if="model.tag" class="tag text--14 ttu" v-html="model.tag" />
      <FeaturesList v-if="model.features.values" :is-one-col="true" :info="model.features" />
    </div>
  </div>
</template>

<script>
import MODEL from './model'
import iconArrow from '~/assets/svg/arrow.svg'
import FeaturesList from '~/components/Features/List/FeaturesList'
import ExternalLink from '~/components/ExternalLink/ExternalLink'
import popupMethods from '~/mixins/popupMethods'

export default {
  name: 'HeadTitle',
  components: {
    iconArrow,
    FeaturesList,
    ExternalLink
  },
  mixins: [popupMethods],
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    bigTitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    url() {
      return this.model.properties && this.model.properties.url ? this.model.properties.url : ''
    },
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

  .popup-btn {
    margin-top: 3rem;
  }

  .tag {
    margin-top: 2rem;
    color: $gray69;
    letter-spacing: 0.1rem;
    &::v-deep {
      a {
        font-weight: $medium;
        transition: color .2s ease, border-color .2s ease;
        &:active {
          color: $brown;
        }
        @include desktop {
          &:hover {
            color: $brown;
          }
        }
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
    max-width: 44rem;
    .title {
      margin-bottom: 0;
    }
    @include tablet {
      max-width: 38rem;
    }
    @include mobile {
      display: block;
      padding-top: 4rem;
    }
  }
}
</style>

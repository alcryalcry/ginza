<template>
  <Section class="section--min about-numbers">
    <div v-if="model.url" class="about-numbers-main-route">
      <nuxt-link class="link light link--arrow" :to="localePath(path)">
        <span v-html="model.linkLabel" />
        <span class="icon">
          <iconArrowBorder />
        </span>
      </nuxt-link>
      <div v-if="model.description" class="description text--28 light" v-html="model.description" />
    </div>
    <div class="about-numbers-list">
      <div v-if="mainItem" class="item isMain">
        <div v-if="mainItem.value" class="value" v-html="mainItem.value" />
        <div v-if="mainItem.label" class="label text--28" v-html="mainItem.label" />
      </div>
      <div class="row isNoGut bt bb">
        <div class="isNoGut col-7 col-t-12 col-m-12 br">
          <div v-for="(item, index) in numbers" :key="item + index" class="item">
            <div v-if="item.value" class="value" v-html="item.value" />
            <div v-if="item.label" class="label text--22" v-html="item.label" />
          </div>
        </div>
        <div class="isNoGut col-icon col-5 col-t-12 col-m-12">
          <div class="media">
            <picture v-if="model.image" class="image">
              <img :src="model.image" alt="">
            </picture>
            <p v-if="model.imageDescription" class="text--18 thin image-description" v-html="model.imageDescription" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="model.links.length" class="about-numbers-links">
      <a v-for="link in model.links" :key="link.url" class="link text--28 light" :href="link.url" v-html="link.linkLabel" />
    </div>
    <div v-if="model.url" class="about-numbers-route">
      <nuxt-link class="link link--brown text--28 light link--arrow" :to="localePath(path)">
        <span v-html="$t('booking.btnLabel')" />
        <span class="icon">
          <iconArrow />
        </span>
      </nuxt-link>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import iconArrowBorder from '~/assets/svg/arrow-border.svg'
import iconArrow from '~/assets/svg/arrow.svg'

export default {
  name: 'AboutNumbers',
  components: {
    Section,
    iconArrowBorder,
    iconArrow
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
    mainItem() {
      return this.model.values.find(item => item.mode === 'main')
    },
    numbers() {
      return this.model.values.filter(item => item.mode !== 'main')
    },
    path() {
      const url = this.model.url.charAt(0) === '/' ? this.model.url : '/' + this.model.url
      return {
        path: this.$route.path + url
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about-numbers {
  .bt {
    border-top: 1px solid $border;
  }
  .bb {
    @include desktop {
      border-bottom: 1px solid $border;
    }
  }
  .br {
    @include desktop {
      border-right: 1px solid $border;
    }
  }
  .bl {
    @include desktop {
      border-left: 1px solid $border;
    }
  }
  .item {
    display: flex;
    align-items: center;
    padding: 6rem 8rem 6rem 0;
    font-weight: $light;
    @include mobile {
      padding: 4rem 0;
    }
    & + .item {
      border-top: 1px solid $border;
    }
    &.isMain {
      display: block;
      .value {
        margin: 0 0 .5rem;
      }
    }
  }
  .value {
    margin-right: 2rem;
    font-size: 12rem;
    line-height: 1;
    letter-spacing: 0.1rem;
    font-family: $fontBase;
    @include tablet {
      font-size: 8rem;
    }
    @include mobile {
      font-size: 6rem;
    }
  }

  .col-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    @include mobile_tablet {
      border-top: 1px solid $border;
    }
    @include mobile {
      padding-top: 6rem;
    }
    @include tablet {
      padding-top: 8rem;
    }
  }

  .media {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .image-description {
    margin-top: 2rem;
  }

  .about-numbers-main-route {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    padding: 3rem 0;

    .description {
      margin-top: 1rem;
      @include tablet_desktop {
        max-width: 50%;
      }
    }

    .link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10rem;
      line-height: 1.24;
      letter-spacing: 0.09rem;
      text-transform: lowercase;
      @include tablet {
        font-size: 7rem;
      }
      @include mobile {
        font-size: 4rem;
      }

      .icon {
        margin-top: 2rem;
        width: 2.6rem;
        height: 5rem;
        @include tablet {
          margin-top: 1rem;
          width: 1.9rem;
          height: 3.7rem;
        }
        @include mobile {
          margin-top: .5rem;
          width: 1.3rem;
          height: 2.5rem;
        }
      }
    }
  }

  .about-numbers-links {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3rem 0;
  }

  .image {
    display: flex;
    width: 100%;
    img {
      object-fit: contain;
    }
  }

}

</style>

<template>
  <Section class="apartment-head section--min">
    <div class="labels">
      <div v-if="model.city" class="text--13 city medium" v-html="model.city" />
      <div v-if="model.category" class="text--13 category medium" v-html="model.category" />
    </div>
    <div class="title-block">
      <div v-if="model.title" class="title title--main bold" v-html="model.title" />
      <div v-if="model.label" class="label" v-html="model.label" />
    </div>
    <div class="params">
      <div v-for="(param, index) in model.params" :key="param.type" class="params-item">
        <div v-if="checkComponents[index]" class="params-icon">
          <component :is="param.type" />
        </div>
        <div class="params-text">{{ param.value }}</div>
      </div>
    </div>
    <div class="description">
      <HeadTitleMini :info="model.description" />
      <p v-if="model.description.text" class="text text--16" v-html="model.description.text" />
      <vue-slide-toggle
        v-if="model.description.moreText"
        :open="isOpen"
      >
        <p class="more-text" v-html="model.description.moreText" />
      </vue-slide-toggle>
      <div class="more-link">
        <button
          class="link link--brown link--tdu"
          @click="isOpen = !isOpen"
          v-html="isOpen ? $t('showMoreDescription.hide') : $t('showMoreDescription.show')"
        />
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'

import beds from '~/assets/svg/icon-beds.svg'
import adult from '~/assets/svg/icon-adult.svg'
import size from '~/assets/svg/icon-size.svg'

export default {
  name: 'HeadTitleApartment',
  components: {
    Section,
    HeadTitleMini,
    beds,
    adult,
    size
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    checkComponents() {
      return this.model.params.map(item => !!this.$options.components[item.type])
    }
  }
}
</script>

<style lang="scss" scoped>
.apartment-head {
  &::v-deep {
    >.container {
      @include tablet_desktop {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
    }
  }
  .title-block {
    margin-bottom: 3rem;
    .title {
      text-transform: uppercase;
    }
    .label {
      color: $gray69;
    }
  }

  .labels {
    display: flex;
    margin-bottom: 1rem;
    letter-spacing: .1rem;
    .category {
      margin-left: .75rem;
      &::before {
        content: '/';
        display: inline-block;
        margin-right: .75rem;
      }
    }
  }

  .description {
    max-width: 62rem;
    margin-top: 12rem;

    .text {
      margin-bottom: 3rem;
    }
    .more-text {
      padding-bottom: 3rem;
    }
  }

  .more-link {
    display: flex;
    justify-content: flex-start;
    .link {
      cursor: pointer;
    }
  }

  .params {
    display: flex;
    flex-flow: row wrap;
    margin: -1.25rem;
  }
  .params-item {
    display: flex;
    align-items: center;
    margin: 1.25rem;
  }
  .params-icon {
    display: flex;
    width: 2.2rem;
    height: 2.2rem;
    margin-right: .75rem;
  }
}
</style>

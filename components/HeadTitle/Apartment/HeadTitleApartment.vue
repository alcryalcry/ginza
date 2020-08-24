<template>
  <Section class="apartment-head section--min">
    <div class="labels">
      <div v-if="model.city" class="text--13 city medium" v-text="model.city" />
      <div v-if="model.category" class="text--13 category medium" v-text="lastBreadcrumb" />
    </div>
    <div class="title-block">
      <div v-if="model.title" class="title title--main bold" v-text="model.title" />
      <div class="ginza-label">
        <GinzaLabel />
      </div>
    </div>
    <ApartmentCounter :info="model.params" />
    <Description :info="model.description" />
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Description from '~/components/Description/Description'
import ApartmentCounter from '~/components/HeadTitle/Apartment/ApartmentCounter'
import GinzaLabel from '~/assets/svg/by-ginza-label.svg'

export default {
  name: 'HeadTitleApartment',
  components: {
    Section,
    Description,
    ApartmentCounter,
    GinzaLabel
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    showText: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    checkComponents() {
      return this.model.params.map(item => !!this.$options.components[item.type])
    },
    lastBreadcrumb() {
      const hasCategoryTranslate = this.$te(`CATEGORY.${this.model.category}`)
      const objName = this.model.hotel
      return hasCategoryTranslate ? this.$t(`CATEGORY.${this.model.category}`) : objName
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

  .ginza-label svg {
    height: fit-content;
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
    margin-top: 6rem;
  }

  .more-link {
    display: flex;
    justify-content: flex-start;
    .link {
      cursor: pointer;
    }
  }
}
</style>

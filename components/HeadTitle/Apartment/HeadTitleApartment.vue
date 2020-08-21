<template>
  <Section class="apartment-head section--min">
    <div class="labels">
      <div v-if="model.city" class="text--13 city medium" v-text="model.city" />
      <div v-if="model.category" class="text--13 category medium" v-text="$te(`CATEGORY.${model.category}`) ? $t(`CATEGORY.${model.category}`) : model.category" />
    </div>
    <div class="title-block">
      <div v-if="model.title" class="title title--main bold" v-text="model.title" />
      <div v-if="model.label" class="label" v-text="model.label" />
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

export default {
  name: 'HeadTitleApartment',
  components: {
    Section,
    Description,
    ApartmentCounter
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
    }
  },
  methods: {
    getTypeText(type, value) {
      if (type === 'size') {
        return 'м²'
      }
      if (type === 'beds') {
        const getText = text => ' ' + this.$t(`COMMON.PROPERTIES.${text}`)
        if (value === 1) {
          return getText('BED')
        } else if (value > 1 && value < 5) {
          return getText('OF_BED')
        } else {
          return getText('BEDS')
        }
      }
      if (type === 'rooms') {
        const getText = text => ' ' + this.$t(`COMMON.PROPERTIES.${text}`)
        if (value === 1) {
          return getText('ROOM')
        } else if (value > 1 && value < 5) {
          return getText('OF_ROOM')
        } else {
          return getText('ROOMS')
        }
      }
      return null
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

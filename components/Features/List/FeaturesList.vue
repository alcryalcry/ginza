<template>
  <Section class="section--min features-list">
    <HeadTitleMini :info="model" />
    <div class="row list">
      <div v-for="(item, index) in model.values" :key="item.id" :class="isOneCol ? 'col-12 col-t-12 col-m-12' : 'col-6 col-t-6 col-m-12'">
        <div class="feature">
          <div class="icon">
            <component :is="generatedComps[index]" />
          </div>
          <div v-if="item.title" class="title" v-html="item.title" />
        </div>
      </div>
    </div>
  </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'

export default {
  components: {
    Section,
    HeadTitleMini
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    isOneCol: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    generatedComps() {
      const capitalize = (string = '') => string.charAt(0).toLowerCase() + string.slice(1)
      return this.model.values.map((component) => {
        const componentName = capitalize(component.id)
        return () => import('~/assets/svg/features/' + componentName + '.svg')
          .then(m => m.default)
          .catch(e => import('~/assets/svg/features/default.svg'))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.features-list {
  .list {
    @include desktop {
      padding-right: 10rem;
    }
  }
  .feature {
    display: flex;
    align-items: flex-start;
  }
  .icon {
    width: 2rem;
    height: 2rem;
    margin-right: 2rem;
  }
  //
}
</style>

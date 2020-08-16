<template>
  <Section v-if="model.values.length" class="grid">
    <div v-if="model.title" class="title title--h2" v-html="model.title" />
    <div class="grid-list">
      <GridItem
        v-for="item in model.values"
        :key="item.id"
        :class="item.mode"
        :info="item"
        class="grid-list-item"
      />
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import GridItem from '~/components/Grid/Item/GridItem'

export default {
  components: {
    Section,
    GridItem
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
.grid {
  .title {
    margin: 0 0 8rem;
    text-align: center;
    @include mobile {
      margin: 0 0 4rem;
    }
  }
  .grid-list {
    display: flex;
    flex-flow: row wrap;
    margin: -5rem -9rem;
    @include tablet {
      margin: -4rem -2rem;
    }
    @include mobile {
      flex-direction: column;
      margin: 0;
    }
  }
}
</style>

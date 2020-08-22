<template>
  <Section class="section--min seating-pattern">
    <HeadTitleMini :info="model" />
    <ul class="pattern-grid">
      <li v-for="(item, index) in model.values" :key="item.adult + index" class="pattern-item">
        <h5 v-if="item.illustration" class="title text--22" v-text="getText(item.illustration)" />
        <h5 v-if="item.adult" class="adult text--14" v-text="`${item.adult} ${$t('COMMON.OF_PLACES')}`" />
        <picture v-if="item.image" class="image">
          <app-image :src="item.image" :alt="item.illustration" />
        </picture>
      </li>
    </ul>
  </Section>
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
    }
  },
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  created() {
  },
  methods: {
    getText(text) {
      return this.$t(`SEATING_PATTERN.${text}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.pattern-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @include mobile {
    grid-template-columns: repeat(2, 1fr);
  }
}
.pattern-item {
  padding: 6rem;
  border: 1px solid $border;
  margin:0 -1px -1px 0;
  @include mobile {
    padding: 3rem;
  }
}
.title {
  text-transform: lowercase;
  font-weight: $thin;
}
.adult {
  margin-top: .5rem;
  text-transform: uppercase;
  font-weight: $regular;
}
.image {
  display: flex;
  margin: 4.5rem auto 0;
  height: 8rem;
  @include mobile {
    height: 6rem;
  }
  img {
    object-fit: contain;
  }
}
</style>

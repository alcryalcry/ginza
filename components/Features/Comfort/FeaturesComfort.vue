<template>
  <Section class="section--min features-comfort">
    <HeadTitleMini :info="model" />
    <div class="list">
      <div class="list-scrolled">
        <div
          v-for="(item, index) in model.values"
          :key="item.title + index"
          class="comfort-item"
        >
          <div class="logo" :style="{ color: item.color }" />
          <div class="text text--13" v-html="item.title" />
        </div>
      </div>
    </div>
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
  }
}
</script>

<style lang="scss" scoped>
.features-comfort {
  .list {
    margin: -1rem;
    overflow: hidden;
  }
  .list-scrolled {
    display: flex;
    align-items: flex-start;
    @include desktop {
      justify-content: flex-start;
      flex-flow: row wrap;
    }
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .comfort-item {
    flex: 0 0 auto;
    width: 11rem;
    margin: 1rem;
    .text {
      margin-top: 3rem;
    }
  }
  .logo {
    position: relative;
    width: 8.6rem;
    height: 8.6rem;
    overflow: hidden;
    &::before {
      content: '';
      @include absolute;
      border-radius: 50%;
      background: currentColor;
      transform: translateX(-50%);
    }
  }
}
</style>

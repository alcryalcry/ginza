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
  &::v-deep {
    .title {
      @include tablet {
        padding-right: 4rem;
        padding-left: 4rem;
      }
      @include mobile {
        padding-right: 2rem;
        padding-left: 2rem;
      }
    }
    .container {
      @include mobile {
        padding-right: 0;
        padding-left: 0;
      }
      @include tablet {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
  .list {
    margin: -1rem 0 -2rem;
    overflow: hidden;
    @include desktop {
      margin-left: -1rem;
      margin-right: -1rem;
    }
  }
  .list-scrolled {
    display: flex;
    align-items: flex-start;
    padding-bottom: 2rem;
    margin-bottom: -2rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    @include desktop {
      justify-content: flex-start;
      flex-flow: row wrap;
    }
    @include tablet {
      padding-right: 3rem;
      padding-left: 3rem;
    }
    @include mobile {
      padding-right: 1rem;
      padding-left: 1rem;
    }
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

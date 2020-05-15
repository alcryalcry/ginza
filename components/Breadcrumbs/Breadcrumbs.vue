<template>
  <Section class="breadcrumbs section--no-p">
    <ul class="breadcrumbs-list">
      <li class="breadcrumbs-item">
        <div class="logo">
          <iconCorona />
        </div>
      </li>
      <li v-for="(item, index) in model" :key="item.linkLabel" class="breadcrumbs-item">
        <nuxt-link class="link text--14 link--gray" :to="localePath(path[index])" target="_blank" v-html="item.linkLabel" />
      </li>
    </ul>
  </Section>
</template>

<script>
import MODEL from './model'
import iconCorona from '~/assets/svg/logo-corona.svg'
import Section from '~/components/Utils/Section'

export default {
  components: {
    Section,
    iconCorona
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
    },
    path() {
      return this.model.map((item) => {
        const url = item.url.charAt(0) === '/' ? item.url : '/' + item.url
        return {
          path: url
        }
      })
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  border-top: 1px solid $border;
  border-bottom: 1px solid $border;
  overflow: hidden;
  .breadcrumbs-list {
    display: flex;
    align-items: center;
    padding: 2.5rem 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .breadcrumbs-item {
    position: relative;
    display: flex;
    flex: 0 0 auto;
    padding-right: 2rem;

    & + .breadcrumbs-item {
      padding-left: 4rem;
      &::before {
        content: ''
      }
    }

    &::before {
      position: absolute;
      top: calc(50% - 6px);
      left: 0;
      padding: 6px;
      border: solid $border;
      border-width: 1px 1px 0 0;
      transform: rotate(45deg);
    }
  }

  .logo {
    width: 2rem;
    height: 2rem;
    color: $gray69;
  }
}
</style>

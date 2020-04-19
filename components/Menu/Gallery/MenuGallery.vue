<template>
  <Section v-bsl:reserveScrollBarGap="isReady" class="menu section--min">
    <div class="menu-content">
      <ul class="list">
        <li
          v-for="item in model.menuList"
          :key="item.anchor"
          class="list-item"
        >
          <button type="button" class="text--24 bold link menu-link" @click="$emit('to-anchor', item.anchor)">
            {{ item.title }}
          </button>
        </li>
      </ul>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'

export default {
  components: {
    Section
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isReady: false
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  mounted() {
    if (process.browser) {
      this.isReady = true
    }
  },
  destroyed() {
    if (process.browser) {
      this.isReady = false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.menu {
  overflow-y: auto;
  &::v-deep {
    .container {
      width: 100%;
    }
  }
}

.list-item {
  & + .list-item {
    border-top: 1px solid $border;
  }
}
.menu-link {
  position: relative;
  text-align: left;
  width: 100%;
  padding: 3rem 0;
  cursor: pointer;
  letter-spacing: 0.05rem;
  @include mobile {
    width: 100%;
    padding: 2rem 0;
  }
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    right: 0.5rem;
    padding: 6px;
    border: solid currentColor;
    border-width: 1px 1px 0 0;
    transform: rotate(45deg);
  }
}
</style>

<template>
  <Section class="toggle-list section--full">
    <Section class="section--no-p">
      <HeadTitleMini :info="model" />
    </Section>
    <div class="list">
      <div
        v-for="item in model.values"
        :key="item.id"
        class="toggle-item"
        :class="{ isActive: activeItem === item.id }"
      >
        <Section class="section--no-p">
          <div class="toggle-button" @click="setActiveItem(item.id)">
            <div class="text text--24 medium" v-html="item.title" />
            <div class="icon">
              <iconPlus />
            </div>
          </div>
          <vue-slide-toggle
            :open="activeItem === item.id"
          >
            <p class="toggle-text" v-html="item.text" />
          </vue-slide-toggle>
        </Section>
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'
import iconPlus from '~/assets/svg/plus.svg'

export default {
  components: {
    Section,
    HeadTitleMini,
    iconPlus
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeItem: null
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
    setActiveItem(id) {
      this.activeItem = this.activeItem === id ? null : id
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-list {
  .toggle-item {
    padding: 3rem 0;
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    transition: background-color .2s ease, color .2s ease;
    &.isActive {
      background: $brown;
      color: $white;
      .icon {
        transform: rotate(45deg);
      }
    }
  }
  .toggle-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    .text {
      flex: 1 1 auto;
      padding-right: 2rem;
      text-transform: uppercase;
    }
  }
  .icon {
    flex: 0 0 auto;
    width: 1.5rem;
    height: 1.5rem;
    transition: transform .2s ease;
  }
  .toggle-text {
    padding-top: 2rem;
    max-width: 60rem;
  }
}
</style>

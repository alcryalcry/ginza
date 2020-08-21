<template>
  <div :class="`params color-${color}`">
    <div v-for="(param, index) in info" :key="param.type" class="params-item">
      <div v-if="checkComponents[index]" class="params-icon">
        <component :is="param.type" />
      </div>
      <div class="params-text">{{ param.value }}{{ getTypeText(param.type, param.value) }}</div>
    </div>
  </div>
</template>

<script>
import beds from '~/assets/svg/icon-beds.svg'
import adult from '~/assets/svg/icon-adult.svg'
import size from '~/assets/svg/icon-size.svg'

export default {
  name: 'ApartmentStatus',
  components: {
    beds,
    rooms: beds,
    adult,
    size
  },
  props: {
    info: {
      type: Array,
      default: () => ([])
    },
    color: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    checkComponents() {
      return this.info.map(item => !!this.$options.components[item.type])
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
  .params {
    display: flex;
    flex-flow: row wrap;
    margin: -1.20rem;
    &.color-gray {
      color: $gray68;
    }

    &-item {
      display: flex;
      align-items: center;
      margin: 1.20rem;
    }

    &-icon {
      display: flex;
      width: 2.2rem;
      height: 2.2rem;
      margin-right: .75rem;
    }
  }
</style>

<template>
  <div :class="`params color-${color}`">
    <div v-for="(param, index) in info" :key="param.type" class="params-item">
      <div v-if="checkComponents[index]" class="params-icon">
        <component :is="param.type" />
      </div>
      <div class="params-text">{{ renderText(param.type, param.value) }}</div>
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
    seats: adult,
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
    declOfNum(n, textForms) {
      n = Math.abs(n) % 100
      const n1 = n % 10
      if (n > 10 && n < 20) { return textForms[2] }
      if (n1 > 1 && n1 < 5) { return textForms[1] }
      if (n1 === 1) { return textForms[0] }
      return textForms[2]
    },
    getTextProperty(wordForm) {
      return ' ' + this.$t(`COMMON.PROPERTIES.${wordForm}`)
    },
    getSuffix(type, value) {
      if (type === 'size') {
        return 'м²'
      }
      if (type === 'beds') {
        const wordForm = this.declOfNum(value, ['BED', 'OF_BED', 'BEDS'])
        return this.getTextProperty(wordForm)
      }
      if (type === 'rooms') {
        const wordForm = this.declOfNum(value, ['ROOM', 'OF_ROOM', 'ROOMS'])
        return this.getTextProperty(wordForm)
      }
      if (type === 'seats') {
        const wordForm = this.declOfNum(value, ['SEAT', 'OF_SEAT', 'SEATS'])
        return this.getTextProperty(wordForm)
      }
      return null
    },
    getPrefix(type) {
      if (type === 'seats') {
        return this.$t(`COMMON.PROPERTIES.UP_TO`) + ' '
      }
      return null
    },
    renderText(type, value) {
      return [this.getPrefix(type, value), value, this.getSuffix(type, value)].join('')
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

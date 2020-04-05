<template>
  <ul class="services-list">
    <li v-for="item in checkComponents" :key="item.name" class="services-item">
      <div class="icon">
        <component :is="item.iconName" />
      </div>
      <div class="icon-logo">
        <iconGinza />
      </div>
      <div v-if="item.label" class="label text--18" v-html="item.label" />
    </li>
  </ul>
</template>

<script>
import MODEL from './model'
import iconGinza from '~/assets/svg/logo-ginza.svg'
import catering from '~/assets/svg/services/catering.svg'
import delivery from '~/assets/svg/services/delivery.svg'
import flower from '~/assets/svg/services/flower.svg'
import fitness from '~/assets/svg/services/fitness.svg'
import tuor from '~/assets/svg/services/tuor.svg'
import prime from '~/assets/svg/services/prime.svg'
import sky from '~/assets/svg/services/sky.svg'

export default {
  components: {
    iconGinza,
    catering,
    delivery,
    flower,
    fitness,
    tuor,
    prime,
    sky
  },
  props: {
    info: {
      type: Array,
      default: () => ([])
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
    checkComponents() {
      return this.model.filter(item => !!this.$options.components[item.iconName])
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.services-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: -1rem;

  .services-item {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    margin: 1rem;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      border-radius: 50%;
      border: 1px solid $border;
      width: 10rem;
      height: 10rem;
      padding: 1.25rem;
      overflow: hidden;
      color: $brown;
    }

    .icon-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: .5rem;
      width: 2.5rem;
      height: 1.5rem;
    }
  }
}
</style>

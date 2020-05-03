<template>
  <div :class="model.mode" :data-anchor="model.anchor">
    <HeroRestaurant :info="model" />
  </div>
</template>

<script>
import HeroRestaurant from '~/components/Hero/Restaurant/HeroRestaurant'

export default {
  name: 'MiddlewareHeroRestaurant',
  components: {
    HeroRestaurant
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    model() {
      return {
        mode: '',
        anchor: false,
        ...this.data,
        ...(this.data.properties || {})
      }
    }
  }
}
</script>

<template>
  <div :class="model.mode" :data-anchor="model.anchor">
    <HeroHotel :info="model" />
  </div>
</template>

<script>
import HeroHotel from '~/components/Hero/Hotel/HeroHotel'

export default {
  name: 'MiddlewareHeroHotel',
  components: {
    HeroHotel
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
  },
  methods: {

  }
}
</script>

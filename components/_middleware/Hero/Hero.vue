<template>
  <div :class="model.mode">
    <Hero :info="model" />
  </div>
</template>

<script>
import Hero from '~/components/Hero/Hero'

export default {
  name: 'MiddlewareHero',
  components: {
    Hero
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
        ...this.data
      }
    }
  }
}
</script>

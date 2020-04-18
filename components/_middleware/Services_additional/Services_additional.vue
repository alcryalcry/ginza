<template>
  <ServicesAdditional :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import ServicesAdditional from '~/components/Services/Additional/ServicesAdditional'

export default {
  name: 'MiddlewareServicesAdditional',
  components: {
    ServicesAdditional
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
        ...this.data
      }
    }
  }
}
</script>

<template>
  <ServicesHead :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import ServicesHead from '~/components/Services/Head/ServicesHead'

export default {
  name: 'MiddlewareServicesHead',
  components: {
    ServicesHead
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

<template>
  <ServicesPage :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import ServicesPage from '~/components/Services/Page/ServicesPage'

export default {
  name: 'MiddlewareServicesPage',
  components: {
    ServicesPage
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

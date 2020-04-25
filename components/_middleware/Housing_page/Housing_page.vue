<template>
  <HousingPage :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import HousingPage from '~/components/Housing/Page/HousingPage'

export default {
  name: 'MiddlewareHousingPage',
  components: {
    HousingPage
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

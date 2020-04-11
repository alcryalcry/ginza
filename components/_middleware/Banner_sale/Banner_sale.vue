<template>
  <BannerSale :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import BannerSale from '~/components/Banner/Sale/Sale'

export default {
  name: 'MiddlewareBannerSale',
  components: {
    BannerSale
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

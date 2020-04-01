<template>
  <div :class="model.mode">
    <BannerSale :info="model" />
  </div>
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
        ...this.data
      }
    }
  }
}
</script>

<template>
  <div :class="model.mode">
    <BannerLove :info="model" />
  </div>
</template>

<script>
import BannerLove from '~/components/Banner/Love/Love'

export default {
  name: 'MiddlewareBannerLove',
  components: {
    BannerLove
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

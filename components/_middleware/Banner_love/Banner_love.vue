<template>
  <div :class="model.mode" :data-anchor="model.anchor">
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
        anchor: false,
        ...this.data
      }
    }
  }
}
</script>

<template>
  <div :class="model.mode">
    <BannerText :info="model" />
  </div>
</template>

<script>
import BannerText from '~/components/Banner/Text/Text'

export default {
  name: 'MiddlewareBannerText',
  components: {
    BannerText
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

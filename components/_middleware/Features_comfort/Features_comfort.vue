<template>
  <FeaturesComfort :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import FeaturesComfort from '~/components/Features/Comfort/FeaturesComfort'

export default {
  name: 'MiddlewareFeaturesComfort',
  components: {
    FeaturesComfort
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

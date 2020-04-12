<template>
  <FeaturesList :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import FeaturesList from '~/components/Features/List/List'

export default {
  name: 'MiddlewareFeaturesList',
  components: {
    FeaturesList
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

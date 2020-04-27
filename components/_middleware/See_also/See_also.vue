<template>
  <SeeAlso :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import SeeAlso from '~/components/SeeAlso/SeeAlso'

export default {
  name: 'MiddlewareSeeAlso',
  components: {
    SeeAlso
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

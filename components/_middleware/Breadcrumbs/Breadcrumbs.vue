<template>
  <Breadcrumbs :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs/Breadcrumbs'

export default {
  name: 'MiddlewareBreadcrumbs',
  components: {
    Breadcrumbs
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

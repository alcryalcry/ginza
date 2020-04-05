<template>
  <Breadcrumbs :info="model" :class="model.mode" />
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
        ...this.data
      }
    }
  }
}
</script>

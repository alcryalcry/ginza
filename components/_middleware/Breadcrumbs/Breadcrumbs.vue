<template>
  <div :class="model.mode">
    <Breadcrumbs :info="model" />
  </div>
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

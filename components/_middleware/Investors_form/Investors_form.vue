<template>
  <InvestorsForm :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import InvestorsForm from '~/components/Investors/Form/InvestorsForm'

export default {
  name: 'MiddlewareInvestorsForm',
  components: {
    InvestorsForm
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
        ...this.data,
        ...(this.data.properties || {})
      }
    }
  }
}
</script>

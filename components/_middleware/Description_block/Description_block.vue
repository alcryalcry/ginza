<template>
  <Section :class="model.mode" :data-anchor="model.anchor">
    <Description :info="model" />
  </Section>
</template>

<script>
import Section from '~/components/Utils/Section'
import Description from '~/components/Description/Description'

export default {
  name: 'MiddlewareDescription',
  components: {
    Description,
    Section
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

<template>
  <TextBlock :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import TextBlock from '~/components/TextBlock/TextBlock'

export default {
  name: 'MiddlewareWysiwyg',
  components: {
    TextBlock
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

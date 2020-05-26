<template>
  <BlogFilter :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import BlogFilter from '~/components/Blog/Filter/BlogFilter'

export default {
  name: 'MiddlewareBlogFilter',
  components: {
    BlogFilter
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

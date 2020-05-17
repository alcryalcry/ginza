<template>
  <div class="services-page">
    services-page
  </div>
</template>

<script>
import MODEL from './model'

export default {
  components: {
  },
  props: {
    info: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.services-page {

}
</style>

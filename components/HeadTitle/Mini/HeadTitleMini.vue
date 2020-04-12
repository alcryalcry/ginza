<template>
  <div class="head-title-mini">
    <h4 v-if="model.title" class="title text--24" v-html="model.title" />
    <p v-if="model.description" class="description text--16" v-html="model.description" />
  </div>
</template>

<script>
import MODEL from './model'

export default {
  name: 'HeadTitleMini',
  components: {
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.head-title-mini {
  max-width: 40rem;
  .title {
    margin-bottom: 3rem;
  }
}
</style>

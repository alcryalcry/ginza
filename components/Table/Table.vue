<template>
  <table>
    <thead>
      <tr>
        <th v-for="key in model.columns" :key="key" v-html="key" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in model.values" :key="entry.text">
        <td v-for="key in model.columns" :key="key" v-html="entry[key]" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import MODEL from './model'

export default {
  components: {
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
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
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.table {

}
</style>

<template>
  <div class="page">
    <Header :info="headerData" />

    <main class="page-content">
      <slot name="page-content" :value="value" />
      <slot name="popup" />
    </main>

    <Footer :info="footerData" />
  </div>
</template>

<script>
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  props: {
    headerData: {
      type: Object,
      default: () => ({})
    },
    footerData: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

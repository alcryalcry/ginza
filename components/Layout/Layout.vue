<template>
  <div class="page">
    <Header :is-main="isHeaderMain" :info="header" />

    <main class="page-content">
      <slot name="page-content" :value="value" />
      <slot name="popup" />
    </main>

    <Footer :info="footer" />
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
    header: {
      type: Object,
      default: () => ({})
    },
    footer: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    },
    isHeaderMain: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

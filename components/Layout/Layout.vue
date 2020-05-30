<template>
  <div class="page">
    <Header :is-main="isHeaderMain && !!header" :info="header" />

    <main class="page-content">
      <slot name="page-content" :value="value">
        <Section class="section--min">
          <!-- <div class="title--h1">Something went wrong. <br>Please try again later</div> -->
        </Section>
      </slot>
      <slot name="popup" />
    </main>

    <Footer v-if="footer.menuList" :info="footer" />
  </div>
</template>

<script>
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Section from '~/components/Utils/Section'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    Section
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
  mounted() {
    // console.log(this.$router.options.routes.filter(item => !item.path.includes('/en/')).sort((a, b) => a.path.localeCompare(b.path)))
  },
  methods: {}
}
</script>

<template>
  <div class="page">
    <Header :is-main="isHeaderMain && header" />

    <main class="page-content">
      <FixedActions v-if="showTravelline" :info="fixedData" />
      <slot name="page-content" :value="value">
        <Section class="section--min">
          <!-- <div class="title--h1">Something went wrong. <br>Please try again later</div> -->
        </Section>
      </slot>
      <slot name="popup" />
    </main>

    <Footer v-if="footer" />
  </div>
</template>

<script>
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Section from '~/components/Utils/Section'
import FixedActions from '~/components/FixedActions/FixedActions'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    Section,
    FixedActions
  },
  props: {
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    value: {
      type: Object,
      default: () => ({})
    },
    isHeaderMain: {
      type: Boolean,
      default: false
    },
    showTravelline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fixedData: {
        ...this.$t('fixedActions.travelline')
      }
    }
  },
  computed: {},
  mounted() {
    // console.log(this.$router.options.routes.filter(item => !item.path.includes('/en/')).sort((a, b) => a.path.localeCompare(b.path)))
  },
  methods: {}
}
</script>

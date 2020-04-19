<template>
  <div class="page">
    <main class="page-content">
      <slot name="page-content" :value="value">
        <Section class="section--min">
          <!-- <div class="title--h1">Something went wrong. <br>Please try again later</div> -->
        </Section>
      </slot>
      <slot name="popup" />
    </main>
  </div>
</template>

<script>
import Section from '~/components/Utils/Section'

export default {
  name: 'Layout',
  components: {
    Section
  },
  props: {
    header: {
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

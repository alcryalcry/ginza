<template>
  <HeadTitleApartment :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import HeadTitleApartment from '~/components/HeadTitle/Apartment/HeadTitleApartment'

export default {
  name: 'MiddlewareHeadTitleApartment',
  components: {
    HeadTitleApartment
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
        ...this.data
      }
    }
  }
}
</script>

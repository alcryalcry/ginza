<template>
  <BookingMini :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import BookingMini from '~/components/Booking/Mini/BookingMini'

export default {
  name: 'MiddlewareBookingMini',
  components: {
    BookingMini
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

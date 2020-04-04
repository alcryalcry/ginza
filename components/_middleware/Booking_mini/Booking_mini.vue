<template>
  <BookingMini :class="model.mode" :info="model" />
</template>

<script>
import BookingMini from '~/components/Booking/Mini/Mini'

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
        ...this.data
      }
    }
  }
}
</script>

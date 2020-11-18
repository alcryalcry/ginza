<template>
  <TravelLine />
</template>

<script>
import page from '~/mixins/page'
import TravelLine from '~/components/Booking/TravelLine'

export default {
  name: 'Booking',
  components: {
    TravelLine
  },
  mixins: [page]
}
</script>

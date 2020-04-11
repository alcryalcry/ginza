<template>
  <Section class="booking-mini section--no-p">
    <div class="booking-content" :class="{ isScrolled: GET_HEADER_STATUS || GET_MENU_STATUS }">
      <ul class="booking-list">
        <li class="booking-item">
          <button class="booking-button">Выбери город +</button>
        </li>
        <li class="booking-item">
          <button class="booking-button">Даты</button>
        </li>
        <li class="booking-item">
          <button class="booking-button">Гостей +</button>
        </li>
        <li class="booking-item">
          <button class="booking-button">Бронировать -></button>
        </li>
      </ul>
    </div>
  </Section>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
// import iconLove from '~/assets/svg/love.svg'

export default {
  name: 'BookingMini',
  components: {
    Section
    // iconLove
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters({
      GET_HEADER_STATUS: 'popup/GET_HEADER_STATUS',
      GET_MENU_STATUS: 'popup/GET_MENU_STATUS'
    }),
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.booking-mini {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 2.5rem;
  z-index: 100;
  @include mobile_tablet {
    display: none;
  }
}

.booking-content {
  display: flex;
  align-items: stretch;
  padding: 0 4rem;
  min-height: 5rem;
  background: $white;
  border-radius: 4px;
  border: 1px solid $border;
  transition: background-color .2s ease, border-color .2s ease;
  &.isScrolled {
    background-color: $brown;
    border-color: $brown;
    .booking-button {
      color: $white;
    }
  }
}

.booking-list {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex: 1 1 auto;
}

.booking-item {
  position: relative;
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  padding: 0 6rem;
  & + .booking-item {
    &::before {
      content: '';
      position: absolute;
      top: 1.2rem;
      left: 0;
      width: 1px;
      height: calc(100% - 2.4rem);
      background: $border;
    }
  }
}

.booking-button {
  flex: 1 1 auto;
  transition: color .2s ease;
}
</style>

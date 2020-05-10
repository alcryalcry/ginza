<template>
  <div v-if="GET_POPUP_TYPE === 'popupBooking'" class="popup-booking">
    <Section class="section--big section--no-p popup-head">
      <div class="popup-head-row">
        <div class="popup-close">
          <button class="burger" type="button" @click="CLOSE_POPUP">
            <div class="burger-button">
              <div class="line" />
              <div class="line" />
              <div class="line" />
            </div>
          </button>
        </div>
      </div>
    </Section>
    <div v-bsl:reserveScrollBarGap="GET_POPUP_STATUS" class="popup-content">
      <Section class="section--big">
        <div class="popup-booking-container">
          {{ model }}
        </div>
      </Section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'

export default {
  name: 'PopupBooking',
  components: {
    Section
  },
  computed: {
    model() {
      return MODEL(this.GET_POPUP_CONTENT)
    },
    ...mapGetters({
      GET_POPUP_TYPE: 'popup/GET_POPUP_TYPE',
      GET_POPUP_STATUS: 'popup/GET_POPUP_STATUS',
      GET_POPUP_CONTENT: 'popup/GET_POPUP_CONTENT'
    })
  },
  methods: {
    ...mapMutations({
      CLOSE_POPUP: 'popup/CLOSE_POPUP'
    })
  }
}
</script>

<style lang="scss" scoped>
.popup-head {
  position: relative;
  background: transparent;
  border-bottom: 1px solid $border;
  z-index: $zLayerMenuOpenedBurgerBtn;
}

.popup-head-row {
  position: relative;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  background-color: rgba($white, 0.85);
  @include mobile {
    padding: 1.5rem 0;
  }
}

.burger {
  display: flex;
  align-items: center;
  margin-left: -1rem;
  cursor: pointer;
  &:active {
    color: $brown;
    outline: none;
  }
  @include desktop {
    &:hover {
      color: $brown;
    }
  }
}
.burger-button {
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
  width: 4.4rem;
  height: 3.2rem;
  padding: 1rem;
  cursor: pointer;
  z-index: $zLayerMenuOpenedBurgerBtn;
  .line {
    height: 1px;
    background: currentColor;
    transition: transform 0.3s ease, opacity 0.3s ease, color 0.2s ease;
    &:nth-child(2) {
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: currentColor;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }
    }
    &:nth-child(1) {
      opacity: 0;
      transform: translateX(-50%);
    }
    &:nth-child(3) {
      opacity: 0;
      transform: translateX(50%);
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(2)::after {
      transform: rotate(-90deg);
    }
  }
}
</style>

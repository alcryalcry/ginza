<template>
  <div ref="popup" class="popup" :class="{ isActive: GET_POPUP_STATUS }">
    <div class="popup-backdrop" @click.self="CLOSE_POPUP">
      <button class="popup-close" type="button" @click="CLOSE_POPUP" />
    </div>
    <div class="popup-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      GET_POPUP_STATUS: 'popup/GET_POPUP_STATUS',
      GET_POPUP_TYPE: 'popup/GET_POPUP_TYPE'
    })
  },
  watch: {
    GET_POPUP_STATUS(newStatus) {
      if (newStatus) {
        document.body.addEventListener('keyup', this.initHideEvents, false)
      } else {
        document.body.removeEventListener('keyup', this.initHideEvents, false)
      }
    }
  },
  methods: {
    ...mapMutations({
      CLOSE_POPUP: 'popup/CLOSE_POPUP'
    }),
    initHideEvents(e) {
      if (e.keyCode === 27) {
        this.CLOSE_POPUP()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: $zLayerMenuOpened;
  &.isActive {
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.3s ease .3s;
  }
}

.popup-close {
  position: fixed;
  cursor: pointer;
  border: none;
  background: transparent;
  color: red;
  z-index: $zLayerMenuOpenedBurgerBtn;
  transition: color .3s ease;
  @include desktop {
    top: 7.5rem;
    right: 100rem + 4rem;
    width: 5rem;
    height: 5rem;
  }
  &:active,
  &:focus {
    outline: none;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    margin: auto;
    background-color: $black;
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
}

.popup-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(black, .7);
}

.popup-wrapper {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  background: $white;
  color: $black;
  transition: transform 0.3s ease .3s;

  &::v-deep {
    .popup-content {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}

</style>

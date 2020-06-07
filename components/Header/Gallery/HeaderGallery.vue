<template>
  <header class="header" :class="{ isScrolled: GET_HEADER_STATUS, isOpen: GET_MENU_STATUS }">
    <Section class="section--big section--no-p popup-head">
      <div class="popup-head-row">
        <div class="popup-close">
          <nuxt-link class="burger" :to="parentPath">
            <div class="burger-button isActive">
              <div class="line" />
              <div class="line" />
              <div class="line" />
            </div>
          </nuxt-link>
        </div>
        <div v-if="model.title" class="title text--16 ttu" v-html="model.title" />
        <div class="gallery-burger">
          <button
            type="button"
            :class="{ 'button--active': GET_MENU_STATUS }"
            class="button burger-button m-show"
            @click="TOGGLE_MENU"
            @keydown.esc="CLOSE_MENU"
          >
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </button>
          <button
            class="button m-hide"
            :class="{ 'button--active': GET_MENU_STATUS }"
            @click="TOGGLE_MENU"
            @keydown.esc="CLOSE_MENU"
            v-html="$t('header.allRooms')"
          />
        </div>
      </div>
    </Section>
    <transition mode="out-in" name="header">
      <MenuGallery
        v-if="GET_MENU_STATUS"
        key="1"
        :info="model"
        class="header-menu"
        @to-anchor="toAnchor"
      />
    </transition>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import MenuGallery from '~/components/Menu/Gallery/MenuGallery'

export default {
  components: {
    Section,
    MenuGallery
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      GET_LANG: 'GET_LANG',
      GET_MENU_STATUS: 'header/GET_MENU_STATUS',
      GET_HEADER_STATUS: 'header/GET_HEADER_STATUS'
    }),
    model() {
      return MODEL(this.info)
    },
    parentPath() {
      return this.$route.path.replace('/gallery', '')
    }
  },
  methods: {
    ...mapMutations({
      SET_HEADER: 'header/SET_HEADER',
      TOGGLE_MENU: 'header/TOGGLE_MENU',
      CLOSE_MENU: 'header/CLOSE_MENU'
    }),
    toAnchor(id) {
      this.CLOSE_MENU()
      this.$emit('to-anchor', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  border-bottom: 1px solid $border;
  z-index: $zLayerMenuOpenedBurgerBtn;
}

.popup-head-row {
  position: relative;
  padding: 2rem $sectionOffsetHorizontal;
  margin: 0 0 - $sectionOffsetHorizontal;
  display: flex;
  background: $white;
  justify-content: space-between;
  align-items: center;
  z-index: $zLayerMenuOpenedBurgerBtn;

  @include backdrop;

  @include tablet {
    padding: 2rem $sectionOffsetHorizontalTablet;
    margin: 0 0 - $sectionOffsetHorizontalTablet;
  }
  @include mobile {
    padding: 1.5rem $sectionOffsetHorizontalMobile;
    margin: 0 0 - $sectionOffsetHorizontalMobile;
  }
}

.header-menu {
  position: fixed;
  top: calc(#{$headerHeight} - .5rem);
  right: 0;
  bottom: 0;
  left: 0;
  background: $white;
  z-index: $zLayerMenuOpened;
  @include tablet {
    display: flex;
    top: calc(#{$headerHeightTablet} - .5rem);
  }
  @include mobile {
    display: flex;
    top: calc(#{$headerHeightMobile} - .5rem);
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
  &.isActive {
    .line {
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
  .line {
    height: 1px;
    background: currentColor;
    &:nth-child(2) {
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: currentColor;
      }
    }
  }
}

.header-enter-active,
.header-leave-active {
  transition: opacity 0.2s ease, transform 0.4s ease;
}

.header-enter,
.header-leave-to {
  opacity: 0;
  transform: translateY(-10rem);
}
</style>

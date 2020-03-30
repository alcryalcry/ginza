<template>
  <header class="header" :class="{ isOpen: GET_MENU_STATUS }">
    <Section class="header-top section--big section--no-p">
      <div class="header-row">
        <div class="header-col left">
          <button class="burger" @keydown.esc="CLOSE_MENU" @click="TOGGLE_MENU">
            <div class="burger-button">
              <div class="line" />
              <div class="line" />
              <div class="line" />
            </div>
            <span class="text text--13">
              {{ $t("header.menu_name") }}
            </span>
          </button>
          <nuxt-link v-if="model.prevPage" class="back" :to="localePath(model.prevPage)">
            <div class="back-link">
              <iconBack />
            </div>
            <span class="text text--13">
              {{ $t("header.back") }}
            </span>
          </nuxt-link>
        </div>
        <div class="header-col center">
          <nuxt-link class="logo" :to="localePath('/')">
            <iconLogo />
          </nuxt-link>
        </div>
        <div class="header-col right">
          <div class="header-link">
            <button class="search">
              <iconSearch />
            </button>
          </div>
          <div class="header-link m-hide">
            <button class="lang">
              {{ GET_LANG }}
            </button>
          </div>
        </div>
      </div>
    </Section>
    <transition mode="out-in" name="header">
      <Menu
        v-if="GET_MENU_STATUS"
        key="1"
        :info="model.menu"
        class="header-menu"
      />
    </transition>
  </header>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Menu from '~/components/Menu/Menu'
import iconLogo from '~/assets/svg/logo.svg'
import iconBack from '~/assets/svg/back.svg'
import iconSearch from '~/assets/svg/search.svg'

export default {
  components: {
    Section,
    iconLogo,
    iconBack,
    iconSearch,
    Menu
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters({
      GET_LANG: 'GET_LANG',
      GET_MENU_STATUS: 'popup/GET_MENU_STATUS'
    }),
    model() {
      return MODEL(this.info)
    }
  },
  created() {
    if (process.browser) {
      this.UPDATE_CITIES(this.model.cities)
    }
  },
  methods: {
    ...mapMutations({
      TOGGLE_MENU: 'popup/TOGGLE_MENU',
      CLOSE_MENU: 'popup/CLOSE_MENU',
      SET_CITIES: 'SET_CITIES'
    }),
    ...mapActions({
      UPDATE_CITIES: 'UPDATE_CITIES'
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: $white;
  z-index: $zLayerTop;

  .isMainPage & {
    position: absolute;
    left: 0;
    right: 0;
    background: transparent;
    .header-menu {
      top: 0;
      padding-top: 6.5rem;
      @include desktop {
        padding-top: calc(7rem + 4rem);
      }
    }
    .header-top {
      border: none;
      background: transparent;
      @include desktop {
        padding-top: 6rem;
      }
    }
    &:not(.isOpen) {
      .back,
      .logo,
      .lang,
      .search,
      .burger {
        color: $white
      }
      .header-link + .header-link::before {
        background: $white;
      }
    }
  }

  &.isOpen {
    .burger {
      pointer-events: auto;
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
  }

  .header-top {
    position: relative;
    padding: 2rem 0;
    background: $white;
    border-bottom: 1px solid $border;
    z-index: $zLayerMenuOpenedBurgerBtn;
    @include mobile {
      padding: 1.5rem 0;
    }
  }

  .header-menu {
    position: fixed;
    top: $headerHeight;
    right: 0;
    bottom: 0;
    left: 0;
    background: $white;
    z-index: $zLayerMenuOpened;
    @include mobile_tablet {
      display: flex;
    }
  }

  .header-link {
    & + .header-link {
      position: relative;
      margin-left: 2.5rem;
      padding-left: 2.5rem;

      &::before {
        content: "";
        position: absolute;
        top: 0.75rem;
        left: 0;
        width: 1px;
        height: 1.5rem;
        background: $gray;
        transition: background-color .2s ease;
      }
    }
  }

  .lang {
    display: flex;
    align-items: center;
    height: 3rem;
    padding: 0.6rem;
    line-height: 1;
    transition: color .2s ease;
  }

  .search {
    display: flex;
    width: 3rem;
    height: 3rem;
    padding: 0.6rem;
    transition: color .2s ease;
  }

  .back {
    display: flex;
    align-items: center;
    margin-left: 6rem;
    transition: color .2s ease;
    @include mobile {
      display: none;
    }
    .back-link {
      display: flex;
      width: 3rem;
      height: 3rem;
      padding: 0.6rem;
    }
    .text {
      margin-left: 0.5rem;
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
        .burger-button,
        .text {
          color: $brown;
        }
      }
    }
    .text {
      margin-left: 0.5rem;
      transition: color 0.2s ease;
      @include mobile {
        display: none;
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
      z-index: $zLayerMenuOpenedBurgerBtn;
      &:active {
        outline: none;
      }
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
      }
    }
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-col {
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    &.left {
      justify-content: flex-start;
      align-items: center;
      flex-basis: 35%;
    }
    &.center {
      justify-content: center;
      flex-basis: 30%;
    }
    &.right {
      justify-content: flex-end;
      flex-basis: 35%;
    }
    .logo {
      display: block;
      width: 11rem;
      height: 4rem;
      transition: color .2s ease;
      @include desktop {
        &:hover {
          color: $brown;
        }
      }
      @include mobile {
        width: 8.7rem;
        height: 3rem;
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

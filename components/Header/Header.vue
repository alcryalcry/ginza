<template>
  <header class="header" :class="{ isScrolled: GET_HEADER_STATUS, isOpen: GET_MENU_STATUS }">
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
          <client-only>
            <button v-if="hasPrevUrl" class="back" @click="goToPrevPage">
              <div class="back-link">
                <iconBack />
              </div>
              <span class="text text--13">
                {{ $t("header.back") }}
              </span>
            </button>
          </client-only>
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
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              class="lang"
              :to="switchLocalePath(locale.code)"
              v-html="locale.name"
            />
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
import { throttle } from 'throttle-debounce'
import { mapGetters, mapMutations } from 'vuex'
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
    isMain: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters({
      GET_LANG: 'GET_LANG',
      GET_MENU_STATUS: 'header/GET_MENU_STATUS',
      GET_HEADER_STATUS: 'header/GET_HEADER_STATUS'
    }),
    hasPrevUrl() {
      if (process.browser) {
        return window.history.length > 2 && this.$route.path !== '/'
      }
      return false
    },
    model() {
      return MODEL(this.info)
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }

  },
  mounted() {
    if (process.browser) {
      this.initEvents()
    }
  },
  destroyed() {
    this.removeEvents()
  },
  methods: {
    ...mapMutations({
      SET_HEADER: 'header/SET_HEADER',
      TOGGLE_MENU: 'header/TOGGLE_MENU',
      CLOSE_MENU: 'header/CLOSE_MENU'
    }),
    goToPrevPage() {
      this.$router.back()
    },
    initEvents () {
      if (this.GET_MEDIA_QUERY !== 'mobile') {
        this.scrollEvent = throttle(150, () => this.changeColor())
        window.addEventListener('scroll', this.scrollEvent, false)
      }
    },
    removeEvents () {
      if (this.scrollEvent) { window.removeEventListener('scroll', this.scrollEvent, false) }
    },
    changeColor () {
      this.SET_HEADER(window.pageYOffset > 15)
    }
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
  transition: background-color .2s ease;

  .isMainPage & {
    &:not(.isScrolled) {
      background: transparent;
      .header-menu {
        top: 0;
        padding-top: 6.5rem;
        @include desktop {
          padding-top: calc(7rem + 4rem);
        }
      }
      .header-top {
        border-color: transparent;
        background: transparent;
        transform: translateY(2rem);
      }
      &:not(.isOpen) {
        .back,
        .logo,
        .lang,
        .search,
        .burger,
        .burger,
        .burger .text,
        .burger .burger-button {
          color: $white;
          &:hover {
            color: $white;
          }
        }
        .search,
        .lang,
        .logo,
        .burger {
          @include desktop {
            &:hover {
              color: rgba($white, .5);
              .burger-button,
              .text {
                color: rgba($white, .5);
              }
            }
          }
        }
        .header-link + .header-link::before {
          background: $white;
        }
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
    transition: transform .2s ease .2s, background-color .2s ease, border-color .2s ease;
    @include mobile {
      padding: 1.5rem 0;
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
    display: block;
    text-align: center;
    height: 3rem;
    padding: 0.6rem;
    line-height: 1;
    cursor: pointer;
    transition: color .2s ease;
    &:active {
      color: $brown;
    }
    @include desktop {
      &:hover {
        color: $brown;
      }
    }
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .search {
    display: flex;
    width: 3rem;
    height: 3rem;
    padding: 0.6rem;
    transition: color .2s ease;
    &:active {
      color: $brown;
    }
    @include desktop {
      &:hover {
        color: $brown;
      }
    }
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
  transition: opacity 0.25s ease, transform 0.5s ease;
}

.header-enter,
.header-leave-to {
  opacity: 0;
  transform: translateY(-150%);
}
</style>

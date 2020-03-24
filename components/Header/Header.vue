<template>
  <header class="header">
    <Section class="section--big section--no-p">
      <div class="header-row">
        <div class="header-col left">{{ $t('header.menu_name') }}</div>
        <div class="header-col center">
          <nuxt-link class="logo" :to="localePath('/')">
            <Logo />
          </nuxt-link>
        </div>
        <div class="header-col right">{{ GET_LANG }}</div>
      </div>
    </Section>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~/assets/svg/logo.svg'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters({
      GET_LANG: 'GET_LANG'
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 0;
  background: $white;
  border-bottom: 1px solid $border;
  z-index: $zLayerTop;

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
  }

  .logo {
    display: block;
    width: 11rem;
    height: 4rem;
  }
}
</style>

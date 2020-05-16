<template>
  <div class="page-error">
    <div class="header">
      <nuxt-link class="logo" :to="localePath('/')">
        <iconLogo />
      </nuxt-link>
    </div>
    <p class="content light" v-html="$t('error.text')" />
  </div>
</template>

<script>
import iconLogo from '~/assets/svg/logo.svg'

export default {
  name: 'PageError',
  components: {
    iconLogo
  }
}
</script>

<style lang="scss" scoper>
html {
  display: flex !important;
  flex-direction: column;
}
body {
  flex: 1;
}
.page-error {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 4rem $headerHeight;
  @include mobile {
    padding: 0 2rem $headerHeightMobile;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }
  .content {
    max-width: 60rem;
    font-size: 5rem;
    line-height: 6rem;
    padding: 4rem 0;
    margin: auto;
    text-align: center;
    @include mobile {
      font-size: 3rem;
      line-height: 1.35;
    }
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
</style>

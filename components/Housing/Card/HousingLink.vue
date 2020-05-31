<template>
  <ExternalLink :to="url" class="housing-link">
    <div class="logo logo--hotels">
      <iconHotels />
    </div>
    <div class="content">
      <div class="text" v-html="type ? $t(`housing.${type}`) : ''" />
      <div class="logo logo--arrow">
        <iconArrow />
      </div>
    </div>
    <div class="logo logo--love">
      <iconLove />
    </div>
  </ExternalLink>
</template>

<script>
import iconLove from '~/assets/svg/love.svg'
import iconHotels from '~/assets/svg/logo-hotels.svg'
import iconArrow from '~/assets/svg/arrow.svg'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  name: 'HousingLink',
  components: {
    ExternalLink,
    iconLove,
    iconHotels,
    iconArrow
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.housing-link {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 40rem;
  padding: 5rem;
  background: $white;
  color: $black17;
  transition: color .2s ease;
  &:active {
    .content {
      color: $brown;
    }
  }
  @include desktop {
    &:hover {
      .content {
        color: $brown;
      }
    }
  }
  @include tablet {
    height: 30rem;
    padding: 3rem;
  }
  @include mobile {
    height: 30rem;
    padding: 4rem;
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    margin: auto 0;
    padding: 2rem 0;
    transition: color .2s ease;
  }

  .logo {
    &--hotels {
      width: 5rem;
      height: 5rem;
    }

    &--arrow {
      margin-top: 1.5rem;
      width: 2.7rem;
      height: 2rem;
    }

    &--love {
      width: 13rem;
      height: 4rem;
    }
  }
}
</style>

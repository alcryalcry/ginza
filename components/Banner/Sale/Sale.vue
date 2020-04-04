<template>
  <Section class="section--full banner-section">
    <div class="banner-sale">
      <div v-if="model.values[0]" class="banner-col first">
        <picture v-if="model.values[0]" class="logo">
          <img :src="model.values[0].logo" :alt="model.values[0].description">
        </picture>
        <picture v-if="model.values[0]" class="image">
          <img :src="model.values[0].image" :alt="model.values[0].description">
        </picture>
        <div class="content">
          <div v-if="model.values[0].sale" class="sale" v-html="model.values[0].sale" />
          <div v-if="model.values[0].label" class="label" v-html="model.values[0].label" />
          <div v-if="model.values[0].description" class="description text--13" v-html="model.values[0].description" />
        </div>
      </div>
      <div class="banner-col second">
        <div v-if="model.description" class="text text--16" v-html="model.description" />
      </div>
      <div v-if="model.values[1]" class="banner-col third">
        <picture v-if="model.values[1]" class="logo">
          <img :src="model.values[1].logo" :alt="model.values[1].description">
        </picture>
        <picture v-if="model.values[1]" class="image">
          <img :src="model.values[1].image" :alt="model.values[1].description">
        </picture>
        <div class="content">
          <div v-if="model.values[1].sale" class="sale" v-html="model.values[1].sale" />
          <div v-if="model.values[1].label" class="label" v-html="model.values[1].label" />
          <div v-if="model.values[1].description" class="description text--13" v-html="model.values[1].description" />
        </div>
      </div>
      <div class="banner-col more">
        <div v-if="model.linkLabel" class="label" v-html="model.linkLabel" />
        <nuxt-link class="more-link" :to="localePath(model.url)">
          <iconArrow />
        </nuxt-link>
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import iconArrow from '~/assets/svg/arrow.svg'

export default {
  name: 'BannerSale',
  components: {
    iconArrow,
    Section
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-section {
  border-top: 1px solid $border;
  border-bottom: 1px solid $border;
  // margin: $sectionOffsetVertical 0;
  // @include tablet {
  //   margin: $sectionOffsetVerticalTablet 0;
  // }
  // @include mobile {
  //   margin: $sectionOffsetVerticalMobile 0;
  // }
  &::v-deep {
    .container {
      padding: 0;
    }
  }
}
.banner-sale {
  display: flex;
  @include tablet {
    flex-flow: row wrap;
  }
  @include mobile {
    flex-flow: column nowrap;
  }
}

.banner-col {
  position: relative;
  padding: 2rem;
  min-height: 30rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @include tablet {
    flex-basis: 50%;
    padding: 4rem $sectionOffsetHorizontalTablet;
  }
  @include mobile {
    padding: $sectionOffsetVerticalMobile $sectionOffsetHorizontalMobile;
  }
  &.first {
    flex: 0 0 20%;
    @include desktop {
      padding: 4rem 2.5rem;
    }
    @include tablet {
      flex-basis: 50%;
    }
    .logo {
      position: relative;
      display: flex;
      width: 5rem;
      height: 5rem;
      margin-bottom: 1rem;
      overflow: hidden;
      z-index: 1;
      img {
        object-fit: contain;
      }
    }
    .description {
      padding-top: 1.5rem;
      margin-top: auto;
      line-height: 1.5;
      letter-spacing: 0.1rem;
    }
    .sale {
      font-size: 5.5rem;
      font-weight: $bold;
      line-height: 1;
      letter-spacing: 0.12rem;
    }
  }
  &.second {
    flex: 1 1 40%;
    background: $brown;
    @include desktop {
      padding: 5rem 6rem;
    }
    @include tablet {
      flex-basis: 50%;
    }
    @include mobile {
      padding: 4rem 3rem;
    }
    .text {
      color: $white;
      line-height: 1.5;
    }
  }
  &.third {
    flex: 0 0 24%;
    @include desktop {
      padding: 2.5rem;
    }
    @include tablet {
      flex-basis: 50%;
      order: 4;
    }
    .logo {
      position: relative;
      display: flex;
      width: 9rem;
      height: 9rem;
      margin-bottom: 1.5rem;
      overflow: hidden;
      z-index: 1;
      img {
        object-fit: contain;
      }
    }
    .description {
      padding-top: 1.5rem;
      margin-top: auto;
      line-height: 1.5;
      letter-spacing: 0.1rem;
    }
    .sale {
      font-size: 6.5rem;
      font-weight: $thin;
      line-height: 1.25;
      letter-spacing: 0.12rem;
    }
  }
  &.more {
    flex: 0 0 16%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    @include desktop {
      padding-right: 1rem;
    }
    @include tablet {
      flex-basis: 50%;
      justify-content: center;
    }
    @include mobile {
      justify-content: center;
      min-height: 20rem;
    }
  }

  .content {
    position: relative;
    text-align: center;
    color: $white;
    @include mobile {
      max-width: 70%;
    }
    .label {
      margin-top: -.5rem;
      text-transform: uppercase;
      font-size: 3.2rem;
      font-weight: $thin;
      line-height: 3.8rem;
      letter-spacing: -0.2rem;
    }
  }

  .more-link {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $white;
    color: $black17;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid $border;
    width: 7.7rem;
    height: 7.7rem;
    padding: 2.4rem;
    margin-left: 3rem;
    transition: background-color .2s ease, border-color .2s ease, color .2s ease;

    &:hover {
      color: $white;
      border-color: $white;
      background-color: $brown;
    }
  }

  .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba($black, .5);
    }
  }
}

</style>

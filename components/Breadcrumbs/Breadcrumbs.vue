<template>
  <Section class="breadcrumbs section--no-p">
    <ul class="breadcrumbs-list">
      <li class="breadcrumbs-item">
        <div class="logo">
          <iconCorona />
        </div>
      </li>
      <li v-for="item in model" :key="item.linkLabel" class="breadcrumbs-item">
        <component
          :is="item.url ? 'ExternalLink' : 'div'"
          class="link text--14 link--gray"
          :to="item.url || ''"
          v-html="item.linkLabel"
        />
      </li>
    </ul>
  </Section>
</template>

<script>
import MODEL from './model'
import ExternalLink from '~/components/ExternalLink/ExternalLink'
import iconCorona from '~/assets/svg/logo-corona.svg'
import Section from '~/components/Utils/Section'

export default {
  components: {
    ExternalLink,
    Section,
    iconCorona
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
.breadcrumbs {
  border-top: 1px solid $border;
  border-bottom: 1px solid $border;
  overflow: hidden;
  margin-top: auto;
  &::v-deep {
    .container {
      @include mobile {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
  @include mobile {
    height: 7rem;
  }
  .breadcrumbs-list {
    display: flex;
    align-items: center;
    padding: 2.5rem 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    @include mobile {
      height: 9rem;
      padding-bottom: 4.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  .breadcrumbs-item {
    position: relative;
    display: flex;
    flex: 0 0 auto;
    padding-right: 2rem;

    &:last-child {
      pointer-events: none;
      user-select: auto;
    }

    & + .breadcrumbs-item {
      padding-left: 4rem;
      &::before {
        content: ''
      }
    }

    &::before {
      position: absolute;
      top: calc(50% - 6px);
      left: 0;
      padding: 6px;
      border: solid $border;
      border-width: 1px 1px 0 0;
      transform: rotate(45deg);
    }
  }

  .logo {
    width: 2rem;
    height: 2rem;
    color: $gray69;
  }
}
</style>

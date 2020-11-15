<template>
  <Section v-bsl:reserveScrollBarGap="isReady" class="menu section--menu">
    <div class="menu-content">
      <div class="row">
        <div class="col-9 col-t-12 col-m-12">
          <ul :key="GET_CURRENT_CITY ? GET_CURRENT_CITY.id : 'city'" class="list">
            <li
              v-for="item in menuLinks"
              :key="item.label"
              class="list-item"
            >
              <ExternalLink class="link menu-link" :to="item.url">
                {{ item.label }}
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div class="col-3 col-t-12 col-m-12 sidebar">
          <Cities />
          <div class="menu-social">
            <div v-if="GET_SOCIAL.phone" class="phone">
              <a class="link" :href="`tel:${GET_SOCIAL.phone}`">{{ GET_SOCIAL.phone }}</a>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Cities from '~/components/Cities/Cities'
import Social from '~/components/Social/Social'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    ExternalLink,
    Section,
    Social,
    Cities
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isReady: false
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    ...mapGetters({
      GET_SOCIAL: 'GET_SOCIAL',
      GET_CURRENT_CITY: 'localStorage/GET_CURRENT_CITY'
    }),
    menuLinks() {
      return this.$t('menuList').map((item) => {
        return {
          label: item.label,
          url: item.dependOnCity ? this.GET_CURRENT_CITY.en_name + item.url : item.url
        }
      })
    }
  },
  mounted() {
    if (process.browser) {
      this.isReady = true
    }
  },
  destroyed() {
    if (process.browser) {
      this.isReady = false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.menu {
  overflow-y: auto;
}
.menu-content {
  @include mobile_tablet {
    display: flex;
  }
}

.list-item {
  & + .list-item {
    margin-top: 1rem;
  }
}
.sidebar {
  display: flex;
  flex-flow: column nowrap;

  .menu-social {
    padding-top: 2rem;
    margin-top: auto;
    @include tablet {
      margin-top: 0;
      padding-top: 4rem;
      padding-left: 4rem;
    }
    @include mobile {
      margin-top: 0;
      padding-top: 4rem;
      padding-left: 3rem;
    }
  }
  .phone {
    display: flex;
    margin-bottom: 1rem;
  }
}
.menu-link {
  position: relative;
  padding-left: 4rem;
  font-size: 5rem;
  line-height: 1.25;
  font-family: $fontBase;
  font-weight: $light;
  @include desktop {
    text-indent: -.2rem;
  }
  @include hd {
    font-size: 4.2rem;
  }
  @include tablet {
    text-indent: -.2rem;
    font-size: 3.4rem;
  }
  @include mobile {
    text-indent: -.1rem;
    font-size: 2.6rem;
    padding-left: 3rem;
  }
  &:active {
    color: $brown;
  }
  &.nuxt-link-active {
    &::before {
      opacity: 1;
    }
    color: $brown;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 2.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: $brown;
    opacity: 0;
    transition: opacity .2s ease;
    @include tablet {
      width: 1.5rem;
      height: 1.5rem;
      top: 1.75rem;
    }
    @include mobile {
      width: 1rem;
      height: 1rem;
      top: 1.25rem;
    }
  }
}

.cities {
  @include mobile_tablet {
    margin-top: auto;
  }
  .cities-item {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 3.5rem;
    @include tablet {
      padding-left: 4rem;
    }
    @include mobile {
      padding-left: 3rem;
    }

    &.isActive {
      .cities-btn {
        color: $black17;
      }
      .icon {
        color: $black17;
        opacity: 1;
      }
    }

    & + .cities-item {
      margin-top: 2rem;
    }

    .cities-btn {
      cursor: pointer;
      color: $border;
      transition: color .2s ease;
      &:active {
        color: $black17;
      }
      @include desktop {
        &:hover {
          color: $black17;
        }
      }
    }

    .icon {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 1.5rem;
      height: 1.5rem;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
  }
}
</style>

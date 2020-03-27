<template>
  <Section v-body-scroll-lock:reserveScrollBarGap="isReady" class="menu section--menu">
    <div class="menu-content">
      <div class="row">
        <div class="col-9 col-t-8 col-m-12">
          <ul class="list">
            <li v-for="item in info.list" :key="item.label" class="list-item">
              <nuxt-link class="title--h1 link menu-link" :to="localePath(item.url)">{{ item.label }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-3 col-t-4 col-m-12 sidebar">
          <ul class="cities">
            <li
              v-for="city in GET_CITIES"
              :key="city.id"
              class="cities-item"
              :class="{ isActive: city.id === GET_CURRENT_CITY.id }"
            >
              <div class="icon">
                <iconPlane />
              </div>
              <button
                type="button"
                class="cities-btn"
                @click="SET_CURRENT_CITY(city)"
              >
                {{ city.name }}
              </button>
            </li>
          </ul>
          <div class="menu-social">
            <div v-if="info.phone" class="phone">
              <a class="link" :href="`tel:${info.phone}`">{{ info.phone }}</a>
            </div>
            <Social v-if="info.social" :info="info.social" />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Section from '~/components/Utils/Section'
import iconPlane from '~/assets/svg/plane.svg'
import Social from '~/components/Social/Social'

export default {
  components: {
    Section,
    Social,
    iconPlane
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
    ...mapGetters({
      GET_CITIES: 'GET_CITIES',
      GET_CURRENT_CITY: 'GET_CURRENT_CITY'
    })
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
    ...mapMutations({
      SET_CURRENT_CITY: 'SET_CURRENT_CITY'
    })
  }
}
</script>

<style lang="scss" scoped>
.menu {
  overflow-y: auto;
}
.menu-content {
  @include mobile {
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
  @include mobile {
    padding-left: 3rem;
  }
  &:active {
    &::before {
      opacity: 1;
    }
  }
  &.nuxt-link-active {
    &::before {
      opacity: 1;
    }
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
  @include mobile {
    margin-top: auto;
  }
  .cities-item {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 3.5rem;
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

    & +.cities-item {
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
      transition: opacity .2s ease;
    }
  }
}

</style>

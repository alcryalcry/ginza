<template>
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
        class="cities-btn text--18"
        @click="SET_CURRENT_CITY(city)"
        v-html="city.name"
      />
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import iconPlane from '~/assets/svg/plane.svg'

export default {
  components: {
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
    }
  },
  computed: {
    ...mapGetters({
      GET_CITIES: 'cities/GET_CITIES',
      GET_CURRENT_CITY: 'cities/GET_CURRENT_CITY'
    })
  },
  methods: {
    ...mapMutations({
      SET_CURRENT_CITY: 'cities/SET_CURRENT_CITY'
    })
  }
}
</script>

<style lang="scss" scoped>
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
      height: 100%;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
  }
}
</style>

<template>
  <div class="cities-dropdown">
    <div class="cities-item isActive">
      <div class="icon">
        <iconPlane />
      </div>
      <button
        type="button"
        class="cities-btn"
        @click="toggleList"
        v-html="GET_CURRENT_CITY.name"
      />
    </div>
    <transition mode="out-in" name="list-fade-reversed">
      <ul v-if="isOpen" :key="1" v-on-clickaway="closeList" class="dropdown-list">
        <li
          v-for="city in filteredCities"
          :key="city.id"
          class="cities-item"
        >
          <div class="icon">
            <iconPlane />
          </div>
          <button
            type="button"
            class="cities-btn"
            @click="selectCity(city)"
            v-html="city.name"
          />
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import iconPlane from '~/assets/svg/plane.svg'

export default {
  components: {
    iconPlane
  },
  mixins: [ clickaway ],
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters({
      GET_CITIES: 'cities/GET_CITIES',
      GET_CURRENT_CITY: 'cities/GET_CURRENT_CITY'
    }),
    filteredCities() {
      return this.GET_CITIES.filter(item => item.id !== this.GET_CURRENT_CITY.id)
    }
  },
  methods: {
    ...mapMutations({
      SET_CURRENT_CITY: 'cities/SET_CURRENT_CITY'
    }),
    selectCity(city) {
      this.SET_CURRENT_CITY(city)
      this.closeList()
    },
    toggleList() {
      this.isOpen = !this.isOpen
    },
    closeList() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cities-dropdown {
  position: relative;
  .dropdown-list {
    position: absolute;
    top: calc(100% + 2rem);
    left: 0;
    padding: 3rem 3.5rem 3rem 0;
    background: $white;
    box-shadow: 0px 10px 37px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid $border;
    z-index: 1;
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
  .cities-btn {
    white-space: nowrap;
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
}
</style>

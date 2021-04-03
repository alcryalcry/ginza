<template>
  <div class="cities-dropdown">
    <transition mode="out-in" name="fade-reversed">
      <div class="cities-item isActive">
        <button
          type="button"
          class="cities-btn text--18"
          @click="toggleList"
          v-html="label"
        />
      </div>
    </transition>
    <transition mode="out-in" name="list-fade-reversed">
      <div v-if="isOpen" :key="1" v-on-clickaway="closeList" class="dropdown-list">
        <div class="datepicker-wrapper">
          <FormDatepickerRange :value="getDates" @input-change="setDates" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import FormDatepickerRange from '@/components/FormGenerator/Fields/FormDatepickerRange'

export default {
  components: {
    FormDatepickerRange
  },
  mixins: [ clickaway ],
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    page: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters({
      GET_DATES: 'GET_DATES'
    }),
    getDates() {
      return this.GET_DATES
    }
  },
  methods: {
    ...mapMutations({
      SET_DATES: 'SET_DATES'
    }),
    setDates(dates = { model: null }) {
      this.SET_DATES(dates.model)
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

.datepicker-wrapper {
  position: relative;
  width: 376px;
  color: $black;
}

.cities-dropdown {
  position: relative;
  .dropdown-list {
    position: absolute;
    top: calc(100% + 2rem);
    left: -200px;
    padding: 20px 30px 30px 30px;
    background: $white;
    box-shadow: 0px 10px 37px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid $border;
    z-index: 1;
    @include tablet {
      padding-right: 4rem;
    }
    @include mobile {
      padding-right: 3rem;
    }
  }

  .cities-btn {
    white-space: nowrap;
    cursor: pointer;
    color: $gray;
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

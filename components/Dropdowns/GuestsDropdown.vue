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
          <div class="half">
            <FormCounter name="adults" :value="adults" :min-value="1" @input-change="setAdults" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import FormCounter from '@/components/FormGenerator/Fields/FormCounter'

export default {
  components: {
    FormCounter
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
      GET_ADULTS: 'GET_ADULTS'
    }),
    adults() {
      return this.GET_ADULTS
    }
  },
  methods: {
    ...mapMutations({
      SET_ADULTS: 'SET_ADULTS'
    }),
    setAdults(adults = { model: 1 }) {
      this.SET_ADULTS(adults.model)
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

.half {
  display: inline-flex;
  width: 50%;
  padding: 0 1rem;
}

.datepicker-wrapper {
  position: relative;
  color: $black;
  display: flex;
}

.cities-dropdown {
  position: relative;
  .dropdown-list {
    position: absolute;
    top: calc(100% + 2rem);
    left: -120px;
    padding: 20px;
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

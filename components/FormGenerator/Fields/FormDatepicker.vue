<template>
  <div>
    <div class="input-label" :class="{ 'is-filled': !!value }">
      <Datepicker
        v-model="value"
        class="form-input__control"
        :language="ru"
        :monday-first="true"
        :format="customFormatter"
        @selected="handleDateChange"
      />
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { ru } from 'vuejs-datepicker/dist/locale'

export default {
  name: 'FormDatepicker',
  components: {
    Datepicker
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      value: '',
      ru: ru
    }
  },
  methods: {
    handleDateChange(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-input {
    display: block;
    position: relative;
    appearance: none;
    width: 100%;
  }

  &::v-deep {
    .vdp-datepicker {
      .vdp-datepicker__calendar {
        .cell {
          &.blank {
            pointer-events: none;
          }
          &:not(.blank),
          &:not(.disabled) {
            &.day,
            &.month,
            &.year {
              &:hover {
                border-color: $dark;
              }
            }
          }
          &.selected {
            background: $black17;
            color: $white;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th v-for="column in model.columns" :key="column.id">
            <div class="td-content">
              <span v-for="(label, index) in column.label" :key="index" class="label" v-html="label" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in model.rows" :key="index">
          <td v-for="rowColumn in row" :key="rowColumn.columnId" :class="rowColumn.mode">
            <div class="td-content">
              <span v-for="(label, indexx) in rowColumn.label" :key="indexx" class="label" v-html="label" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MODEL from './model'

export default {
  components: {
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
    model() {
      return MODEL(this.info)
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.table {
  // overflow-x: auto;
  .td-content {
    display: flex;
    text-align: center;
    padding: 0 4rem;
    @include mobile {
      padding: 0 1rem;
    }
  }
  .tag {
    padding-bottom: 1rem;
    font-size: 1.3rem;
    line-height: 1.3rem;
    letter-spacing: 0.02rem;
    text-transform: lowercase;
  }
  .label {
    flex: 1 0 50%;
    padding: 0 1rem;
  }
  table {
    border-spacing: 0 1.5rem;
    border-collapse: separate;
    td {
      width: 33%;
      vertical-align: middle;
      @include mobile {
        min-width: 23rem;
      }
    }
    th {
      font-size: 1.3rem;
      line-height: 2.1rem;
      letter-spacing: 0.2rem;
      font-weight: $bold;
      text-transform: uppercase;
    }
    th,
    td {
      &:first-child {
        text-align: left;
        @include mobile {
          width: 20rem;
          min-width: 20rem;
        }
        .label {
          padding: 0 1rem 0 0;
        }
        .td-content {
          text-align: left;
          padding: 0 4rem 0 0;
          @include mobile {
            padding-right: 1rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="table">
    <table v-for="(group, groupIndex) in groups" :key="group.name">
      <thead>
        <tr>
          <th>
            <div class="td-content">
              <span class="label" v-html="group.name" />
            </div>
          </th>
          <th v-for="(category, index) in categories" :key="index">
            <template v-if="groupIndex < 1">
              <div class="td-content">
                <span class="label" v-html="category" />
              </div>
              <div v-if="subcategories.length" class="td-content">
                <span v-for="subcategory in subcategories" :key="subcategory" class="label tag" v-html="subcategory" />
              </div>
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowName) in group.rows" :key="rowName">
          <td>
            <div class="td-content">
              <span class="label" v-html="rowName" />
            </div>
          </td>
          <td v-for="(category, index) in categories" :key="category + index">
            <div v-if="subcategories.length" class="td-content">
              <span v-for="subcategory in subcategories" :key="subcategory" class="label" v-html="row[subcategory]" />
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
  props: {
    info: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    categories() {
      return [...new Set((this.model || []).map(item => item.category))]
    },
    subcategories() {
      return [...new Set((this.model || []).map(item => item.sub_category))]
    },
    groups() {
      return [...new Set((this.model || []).map(item => item.group))].map((key) => {
        const allGroupCells = (this.model || []).filter(item => item.group === key)
        const rrr = {}
        const rows = [...new Set((allGroupCells).map(item => item.name))]
        rows.forEach((name) => {
          const iii = {}
          allGroupCells.filter(item => item.name === name).forEach((item) => {
            iii[item.sub_category] = item.price
          })
          rrr[name] = iii
        })
        return {
          name: key,
          rows: rrr
        }
      })
    },
    columns() {
      return this.model[0] || []
    },
    rows() {
      return this.model.slice(1) || []
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
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
    font-weight: $regular;
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

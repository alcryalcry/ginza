<template>
  <div class="toggle-list">
    <Section v-if="model.title || model.description" class="section--no-p section--min section--apartment">
      <HeadTitleMini :info="model" />
    </Section>
    <Section class="section--no-p section--full">
      <div class="list">
        <div
          v-for="item in model.values"
          :key="item.id"
          class="toggle-item"
          :class="{ isActive: activeItem === item.id }"
        >
          <Section class="section--no-p section-btn" :class="model.mode || 'section--min'" @click.native="setActiveItem(item.id)">
            <div class="toggle-button">
              <div class="text text--24 bold" v-html="item.title" />
              <div class="icon">
                <iconPlus />
              </div>
            </div>
          </Section>
          <vue-slide-toggle :open="activeItem === item.id">
            <Section class="section--no-p" :class="model.mode || 'section--min'">
              <p v-if="item.text" class="toggle-text" v-html="item.text" />
              <div v-if="item.tables.length" class="tables">
                <Table v-for="table in item.tables" :key="table.id" :info="table" />
                <div v-if="item.descriptionTables" class="table-description" v-html="item.descriptionTables" />
              </div>
            </Section>
          </vue-slide-toggle>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'
import Table from '~/components/Table/Table'
import iconPlus from '~/assets/svg/plus.svg'

export default {
  components: {
    Section,
    HeadTitleMini,
    iconPlus,
    Table
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeItem: null
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
    setActiveItem(id) {
      this.activeItem = this.activeItem === id ? null : id
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-list {
  .tables {
    overflow-x: auto;
    padding: 2rem 0;
    .table {
      & + .table {
        margin-top: 4rem;
      }
    }
    .table-description {
      margin-top: 4rem;
      &::v-deep {
        a {
          color: $white;
          transition: color .2s ease;
          &:active {
            color: $border;
          }
          @include desktop {
            &:hover {
              color: $border;
            }
          }
        }
      }
    }
  }
  .head-title-mini {
    margin-bottom: 0;
  }
  .toggle-item {
    border-bottom: 1px solid $border;
    transition: background-color .2s ease, color .2s ease;
    &:first-child {
      border-top: 1px solid $border;
    }
    &.isActive {
      background: $brown;
      color: $white;
      .icon {
        transform: rotate(45deg);
      }
    }
  }
  .section-btn {
    cursor: pointer;
  }
  .toggle-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
    .text {
      flex: 1 1 auto;
      padding-right: 2rem;
      text-transform: uppercase;
    }
  }
  .icon {
    flex: 0 0 auto;
    width: 1.5rem;
    height: 1.5rem;
    transition: transform .2s ease;
  }
  .toggle-text {
    padding-bottom: 2rem;
    max-width: 60rem;
  }
}
</style>

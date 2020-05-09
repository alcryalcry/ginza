<template>
  <Section class="housing">
    <div class="housing-content">
      <div class="row">
        <div class="col-4 col-t-4 col-m-12 sidebar">
          <div class="sidebar-content ">
            <div class="sidebar-row sidebar-list housing-types-list">
              <HousingTypes
                :custom-list="model.filters"
                :selected-item="selectedFilter"
                @select-type="selectFilter"
              />
            </div>
          </div>
        </div>
        <div class="col-8 col-t-8 col-m-12">
          <div ref="cards" class="housing-cards">
            <div class="housing-list">
              <div class="row">
                <div v-for="card in filteredItems" :key="card.slug" class="col-6 col-t-6 housing-list-item">
                  <HousingCard :info="card" :is-nested="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import HousingCard from '~/components/Housing/Card/HousingCard'
import HousingTypes from '~/components/Housing/Types/HousingTypes'
import Section from '~/components/Utils/Section'

export default {
  components: {
    HousingCard,
    HousingTypes,
    Section
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      selectedFilter: {},
      isOpen: false
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    filteredItems() {
      if (this.selectedFilter.id) {
        let conditional = null
        switch (this.selectedFilter.id) {
          case 'double':
            conditional = item => item === 2
            break
          case 'triple':
            conditional = item => item === 3
            break
          case 'more_3':
            conditional = item => item > 3
            break
          default:
            conditional = () => true
            break
        }
        return this.model.values.filter(item => conditional((item.params.find(param => param.type === 'adult') || {}).value))
      }
      return this.model.values
    }
  },
  mounted() {
    if (process.browser) {
      this.selectedFilter = this.model.filters[0]
    }
  },
  methods: {
    selectFilter(filter) {
      if (this.selectedFilter !== filter) {
        this.selectedFilter = filter
        this.$el.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.housing-list {
  padding: 0 0 15rem;
  margin-top: -4rem;
  margin-bottom: -4rem;
  @include mobile {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0 4rem;
  }
  & + .housing-list {
    padding-top: 15rem;
    border-top: 1px solid $border;
    @include mobile {
      padding-top: 4rem;
    }
  }
}

.housing-list-item {
  padding-top: 4rem;
  padding-bottom: 4rem;
  @include mobile {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

.sidebar {
  display: flex;
  flex-flow: column nowrap;
  @include mobile {
    margin-bottom: 4rem;
  }
}
.sidebar-content {
  position: sticky;
  top: $headerHeight + 4rem;
}
.sidebar-list {
  @include desktop {
    margin-left: -3.5rem;
  }
  @include tablet {
    margin-left: 0;
  }
}
.sidebar-row {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  & + .sidebar-row{
    margin-top: 6rem;
  }
}
</style>

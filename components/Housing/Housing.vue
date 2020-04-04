<template>
  <Section class="housing section--gray">
    <div class="housing-content">
      <div class="row">
        <div class="col-4 col-t-12 col-m-12 sidebar">
          <div class="sidebar-content">
            <div class="sidebar-row sidebar-list housing-types-list">
              <HousingTypes :active-type="activeType" :info="model" @select-type="selectType" />
              <nuxt-link class="link link--brown" :to="localePath('housing')">{{ $t('housing.all') }}</nuxt-link>
            </div>
            <div class="sidebar-row sidebar-list">
              <Cities />
            </div>
            <div class="sidebar-row housing-actions">
              <button
                class="button button--arrow"
                :class="{ 'button--active': activeView === 'list' }"
                @click="activeView='list'"
              >
                <div class="icon">
                  <iconList />
                </div>
                <span class="text">{{ $t('housing.listLabel') }}</span>
              </button>
              <button
                class="button button--arrow"
                :class="{ 'button--active': activeView === 'map' }"
                @click="activeView='map'"
              >
                <div class="icon">
                  <iconMapList />
                </div>
                <span class="text">{{ $t('housing.mapLabel') }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-8 col-t-12 col-m-12">
          <div class="housing-list">
            aparts
            hotels
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import HousingTypes from '~/components/Housing/Types/Types'
import Cities from '~/components/Cities/Cities'
import Section from '~/components/Utils/Section'
import iconList from '~/assets/svg/icon-list.svg'
import iconMapList from '~/assets/svg/icon-map-list.svg'

export default {
  name: 'Housing',
  components: {
    Section,
    iconList,
    iconMapList,
    HousingTypes,
    Cities
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activeType: '',
      activeView: 'list'
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  created() {
    if (process.browser) {
      this.activeType = (this.model.values[0] || {}).id
    }
  },
  methods: {
    selectType(id) {
      this.activeType = id
    }
  }
}
</script>

<style lang="scss" scoped>
.housing {
  .sidebar {
    display: flex;
    flex-flow: column nowrap;
  }
  .sidebar-content {
    position: sticky;
    top: $headerHeight + 4rem;
  }
  .sidebar-list {
    margin-left: -3.5rem;
  }
  .sidebar-row {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    & + .sidebar-row{
      margin-top: 6rem;
    }
  }
  .housing-types-list {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    .housing-types {

    }
    .link {
      margin-left: 4rem;
    }
  }
  .housing-actions {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    .button {
      & + .button {
        margin-top: 2rem;
      }
    }
  }
}
</style>

<template>
  <Section class="housing section--gray">
    <div class="housing-content">
      <div class="row">
        <div class="col-4 col-t-4 col-m-12 sidebar">
          <div class="sidebar-content ">
            <div class="sidebar-row sidebar-list housing-types-list">
              <HousingTypes @select-type="selectType" />
            </div>
            <div class="sidebar-row sidebar-list">
              <Cities />
            </div>
            <div class="sidebar-row housing-actions">
              <HousingViewChanger :active-view="activeView" @set-view="setView($event)" />
            </div>
          </div>
        </div>
        <transition-group :key="transitionKey" mode="out-in" name="fade" tag="div" class="col-8 col-t-8 col-m-12">
          <div v-show="activeView === 'list'" key="list">
            <transition mode="out-in" name="fade">
              <div class="housing-cards">
                <div
                  v-for="values in filteredTypes"
                  :key="values.id"
                  class="housing-list"
                  :data-anchor="values.id"
                >
                  <div class="row">
                    <div v-for="card in values.list" :key="card.id" class="col-6 col-t-6 housing-list-item">
                      <HousingCard :info="card" :is-nested="true" />
                    </div>
                    <div class="col-6 col-t-6 housing-list-item">
                      <HousingLink :url="values.url" :type="values.id" />
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div v-show="activeView === 'map'" key="map" class="housing-map">
            <YandexMap :info="mapMarkers" :is-balloon-need="true" />
          </div>
        </transition-group>
      </div>
    </div>
  </Section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MODEL from './model'
import HousingViewChanger from '~/components/Housing/ViewChanger/HousingViewChanger'
import HousingTypes from '~/components/Housing/Types/HousingTypes'
import HousingCard from '~/components/Housing/Card/HousingCard'
import HousingLink from '~/components/Housing/Card/HousingLink'
import YandexMap from '~/components/YandexMap/YandexMap'
import Cities from '~/components/Cities/Cities'
import Section from '~/components/Utils/Section'
import stickyMenu from '~/mixins/stickyMenu'

export default {
  name: 'Housing',
  components: {
    Section,
    YandexMap,
    HousingTypes,
    HousingCard,
    HousingLink,
    Cities,
    HousingViewChanger
  },
  mixins: [stickyMenu],
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeView: 'list',
      transitionKey: 0
    }
  },
  computed: {
    ...mapGetters({
      GET_HOUSING_STATUS: 'housing/GET_HOUSING_STATUS',
      GET_HOUSING_TYPES: 'housing/GET_HOUSING_TYPES',
      GET_HOUSING_LIST: 'housing/GET_HOUSING_LIST'
    }),
    model() {
      return MODEL(this.info)
    },
    filteredTypes() {
      return this.GET_HOUSING_TYPES.map((type) => {
        return {
          id: type.id,
          url: '/' + type.id,
          linkLabel: type.name,
          list: this.GET_HOUSING_LIST.filter(item => item.type === type.id).splice(0, 3)
        }
      })
    },
    mapMarkers() {
      const arr = []
      this.filteredTypes.forEach((item) => {
        item.list.forEach((listItem) => {
          arr.push(listItem)
        })
      })
      return {
        markers: arr
      }
    },
    stickyAnchors() {
      return this.filteredTypes.map((anchor) => {
        return {
          href: anchor.id,
          id: anchor.id
        }
      })
    }
  },
  watch: {
    GET_HOUSING_STATUS(val) {
      if (!val) {
        this.transitionKey++
      }
    }
  },
  methods: {
    ...mapActions({
      UPDATE_HOUSING_LIST: 'housing/UPDATE_HOUSING_LIST'
    }),
    setView(view) {
      this.activeView = view
      window.scrollTo({
        top: this.$el.getBoundingClientRect().top + window.scrollY - 50,
        behavior: 'smooth'
      })
    },
    selectType(id) {
      if (this.activeView === 'list') {
        this.scrollToSection(id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.housing {
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

  .housing-map {
    height: 50rem;
    @include mobile {
      position: relative;
      height: 36rem;
    }
    &::v-deep {
      .map {
        position: absolute;
        top: 0;
        right: 0;
        width: calc(65rem + ((100vw - #{$containerWidth}) / 2));
        height: 100%;
        @include tablet {
          width: calc(49rem + ((100vw - #{$containerWidthTablet}) / 2));
        }
        @include mobile {
          left: - $sectionOffsetHorizontalMobile;
          width: calc(100% + (#{$sectionOffsetHorizontalMobile} * 2));
        }
      }
    }
  }

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

  .housing-types-list {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
  }
  .housing-actions {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    @include mobile {
      flex-flow: row wrap;
    }

    .button {
      & + .button {
        margin-top: 2rem;
        @include mobile {
          margin: 0 0 0 2rem;
        }
      }
    }
  }
}
</style>

<template>
  <Section class="housing section--full section--no-p section--gray">
    <HousingSubheader />
    <div class="housing-content">
      <div class="housing-filter">
        <div class="row">
          <div class="col-6 col-t-6 housing-filter-col">
            <Cities />
          </div>
          <div class="col-6 col-t-6 housing-filter-col">
            <HousingTypes />
          </div>
          <div class="col-12 col-t-12 housing-filter-col">
            <HousingViewChanger :active-view="activeView" @set-view="setView($event)" />
          </div>
        </div>
      </div>
      <transition-group class="row wrapper isNoGut isNoWrap" mode="out-in" name="list-fade" tag="div">
        <div v-if="isDesktop ? true : activeView === 'list'" key="list" class="col-auto col-t-12 col-m-12">
          <div class="housing-cards">
            <div
              v-for="list in model.values"
              :key="list.id"
              class="housing-list"
              :data-anchor="list.id"
            >
              <div class="row">
                <div v-for="card in list.list" :key="card.slug" class="col-6 col-t-6 housing-list-item">
                  <HousingCard
                    :info="card"
                    @mouseenter.native="setActiveMarker(card)"
                    @mouseleave.native="removeActiveMarker"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isDesktop ? true : activeView === 'map'" key="map" class="col-auto col-t-12 col-m-12 map-col">
          <div class="housing-map">
            <YandexMap :info="mapMarkers" :active-marker-id="activeMarker" :is-balloon-need="true" />
          </div>
        </div>
      </transition-group>
    </div>
  </Section>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import HousingViewChanger from '~/components/Housing/ViewChanger/HousingViewChanger'
import HousingCard from '~/components/Housing/Card/HousingLink'
import YandexMap from '~/components/YandexMap/YandexMap'
import HousingSubheader from '~/components/Housing/Subheader/HousingSubheader'
import Section from '~/components/Utils/Section'
import Cities from '~/components/Cities/Cities'
import HousingTypes from '~/components/Housing/Types/HousingTypes'

export default {
  name: 'HousingPage',
  components: {
    Section,
    YandexMap,
    HousingCard,
    HousingSubheader,
    Cities,
    HousingTypes,
    HousingViewChanger
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeView: 'list',
      activeMarker: null
    }
  },
  computed: {
    ...mapGetters({
      GET_MQ: 'mediaQuery/GET_MQ'
    }),
    model() {
      return MODEL(this.info)
    },
    isDesktop() {
      return this.GET_MQ === 'desktop'
    },
    mapMarkers() {
      const markers = []
      this.model.values.forEach((item) => {
        const {
          id = ''
        } = item
        item.list.forEach((marker) => {
          const {
            coords = [],
            slug = '',
            houseType = id
          } = marker
          markers.push({
            ...marker,
            coords,
            houseType,
            id: slug
          })
        })
      })
      return {
        markers
      }
    }
  },
  methods: {
    setView(view) {
      this.activeView = view
    },
    setActiveMarker(card) {
      this.activeMarker = card.slug
    },
    removeActiveMarker() {
      this.activeMarker = null
    }
  }
}
</script>

<style lang="scss" scoped>
.housing {
  // .wrapper {
  //   width: ;
  // }
  .housing-map {
    width: 100%;
    height: 40rem;
    @include tablet {
      height: 60rem;
    }
    @include desktop {
      margin-top: - $sectionOffsetVertical;
      height: 100%;
    }
    &::v-deep {
      .map {
        @include desktop {
          position: sticky;
          top: $headerHeightBig;
          right: 0;
          width: 100%;
          height: calc(100vh - #{$headerHeightBig});
        }
      }
    }
  }
  &::v-deep {
    .subheader {
      display: none;
      @include desktop {
        display: block;
      }
    }
  }

  .housing-filter {
    position: relative;
    z-index: 2;
    padding: 4rem 2rem 2rem;
    @include tablet {
      padding: 4rem 5rem;
    }
    @include desktop {
      display: none;
    }
  }
  &::v-deep {
    .housing-view-changer {
      @include mobile {
        padding: 0 1rem;
      }
      @include tablet {
        flex-flow: row wrap;
        margin: -1rem;
        padding-top: 2rem;

        .button {
          margin: 1rem;
        }
      }
    }
  }

  .housing-filter-col {
    @include mobile {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  .map-col {
    @include mobile_tablet {
      overflow: hidden;
    }
    @include desktop {
      flex: 1 1 auto;
    }
  }

  .housing-list {
    width: 100%;
    padding: 4rem 2rem;
    overflow: hidden;
    @include tablet {
      padding: 2rem 5rem;
    }
    @include desktop {
      padding: 5rem;
      width: 72rem;
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

}
</style>

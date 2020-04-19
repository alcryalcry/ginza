<template>
  <Section class="housing section--full section--no-p section--gray">
    <div class="housing-content">
      <div class="row isNoGut isNoWrap">
        <div class="col-auto">
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
                    :house-type="list.id"
                    :info="card"
                    @mouseenter.native="setActiveMarker(card)"
                    @mouseleave.native="removeActiveMarker"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-auto map-col">
          <div class="housing-map">
            <YandexMap :info="mapMarkers" :active-marker-id="activeMarker" :is-balloon-need="true" />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import HousingCard from '~/components/Housing/Card/Card'
import YandexMap from '~/components/YandexMap/YandexMap'
import Section from '~/components/Utils/Section'

export default {
  name: 'Housing',
  components: {
    Section,
    YandexMap,
    HousingCard
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeType: '',
      activeMarker: null
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
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
  created() {
    if (process.browser) {
      this.activeType = (this.model.values[0] || {}).id
    }
  },
  methods: {
    selectType(id) {
      this.activeType = id
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
  .housing-map {
    margin-top: - $sectionOffsetVertical;
    height: 100%;
    &::v-deep {
      .map {
        position: sticky;
        top: $headerHeightBig;
        right: 0;
        width: 100%;
        height: calc(100vh - #{$headerHeightBig});
      }
    }
  }

  .map-col {
    flex: 1 1 auto;
  }

  .housing-list {
    padding: 5rem;
    @include desktop {
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

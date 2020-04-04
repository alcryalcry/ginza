<template>
  <div class="map">
    <div class="map-wrapper">
      <div ref="map" class="map-content" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ymaps from 'ymaps'
import MODEL from './model'

export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    markers: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      isReady: false
    }
  },
  computed: {
    model () {
      return MODEL(this.info)
    },
    ...mapGetters({
      GET_LANG: 'GET_LANG'
    })
  },
  created () {
    if (process.browser) {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  methods: {
    init() {
      this.startCoords = [...this.model.coords]
      this.initmap()
    },
    clearMap() {
      this.map.geoObjects.removeAll()
      this.map.setCenter(this.startCoords)
      this.map.setZoom(this.model.zoom)
    },
    initmap(showMarker = false) {
      if (this.$refs.map) {
        ymaps
          .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
          .then((maps) => {
            const iconLayout = maps.templateLayoutFactory.createClass(
              '<div class="map-icon js-map-icon" data-url="$[properties.iconUrl]"></div>'
            )
            this.createMarker = (marker) => {
              const placemark = new maps.Placemark(marker.coords, {
                iconUrl: marker.url
              }, {
                iconLayout: iconLayout,
                iconShape: {
                  type: 'Circle',
                  coordinates: [-30, -30],
                  radius: 60
                },
                cursor: 'default'
              })
              placemark.events.add(['click'], (e) => {
                const {
                  originalEvent = { target: { properties: { _data: {} } } }
                } = e
                const url = originalEvent.target.properties._data.iconUrl
                if (url) {
                  // TODO: что-то сделать с кликом по иконке
                  console.log(url)
                }
              })
              return placemark
            }

            this.map = new maps.Map(this.$refs.map, {
              center: this.startCoords,
              zoom: this.model.zoom,
              controls: []
            }, {
            })

            this.markers.forEach((marker) => {
              this.map.geoObjects.add(this.createMarker(marker))
            })
          })
          .catch(error => console.error('Failed to load Yandex Maps', error))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 50rem;
  overflow: hidden;

  &::v-deep {
    .map-wrapper {
      position: relative;
      // width 100%
      // height 100%
      margin-top: -3rem;
      width: calc(100% + 6rem);
      height: calc(100% + 6rem);
      // >>>[class*="ymaps-2-1"][class*="-ground-pane"]
      //   filter grayscale(1)
    }
    .map-content {
      width: 100%;
      height: 100%;
    }
    .map-icon {
      position: relative;
      transform: translate3d(-50%,-100%, 0);
      display: flex;
      width: 4rem;
      height: 5rem;
      justify-content: center;
      align-items: center;
      border-radius: 0;
      background-color: transparent;
      background-position: 0 0;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('/images/map-marker.svg');
    }
  }
}
</style>

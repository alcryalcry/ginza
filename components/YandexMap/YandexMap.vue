<template>
  <div class="map">
    <yandex-map v-bind="mapSettings">
      <ymap-marker
        v-for="marker in markers"
        :key="marker.id"
        class="map-icon aaa123"
        :marker-id="marker.id"
        :coords="marker.coords"
        cluster-name="1"
        :icon="activeMarker === marker.id ? iconMarkerActive : iconMarker"
        @click="showBaloon(marker.id)"
      />
    </yandex-map>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ymapMarker, yandexMap } from 'vue-yandex-maps'
import MODEL from './model'

export default {
  components: {
    yandexMap,
    ymapMarker
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    activeMarkerId: {
      type: String,
      default: ''
    },
    isMarkerDefault: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeMarker: ''
    }
  },
  computed: {
    model () {
      return MODEL(this.info)
    },
    ...mapGetters({
      GET_LANG: 'GET_LANG'
    }),
    markers() {
      return this.isMarkerDefault ? [
        {
          id: 'place',
          coords: this.model.coords
        }
      ] : this.model.markers
    },
    iconMarker() {
      return {
        layout: 'default#image',
        imageHref: '/images/map-marker.svg',
        imageSize: [40, 50],
        imageOffset: [-20, -50]
      }
    },
    iconMarkerActive() {
      return {
        layout: 'default#image',
        imageHref: '/images/map-marker-active.svg',
        imageSize: [40, 50],
        imageOffset: [-20, -50]
      }
    },
    mapSettings() {
      return {
        settings: {
          lang: this.GET_LANG,
          coordorder: 'latlong',
          version: '2.1'
        },
        showAllMarkers: this.markers.length > 1,
        controls: [],
        zoom: 13,
        markers: this.markers,
        // options: {
        //   suppressMapOpenBlock: true
        // },
        clusterOptions: {
          1: {
            clusterDisableClickZoom: true,
            clusterOpenBalloonOnClick: true,
            clusterBalloonLayout: [
              '<ul class=list>',
              '{% for geoObject in properties.geoObjects %}',
              '<li><a href=# class="list_item">{{ geoObject.properties.balloonContentHeader|raw }}</a></li>',
              '{% endfor %}',
              '</ul>'
            ].join('')
          }
        },
        ...this.model
      }
    }
  },
  watch: {
    activeMarkerId(id) {
      this.activeMarker = id
    }
  },
  // если понадобится instance map
  // async mounted() {
  //   await loadYmap({ ...this.settings })
  // },
  methods: {
    showBaloon(id) {
      if (this.isMarkerDefault) {
        return
      }
      this.activeMarker = id
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $grayBg;

  &::v-deep {
    [class*="ymaps-2-1"][class*="-ground-pane"] {
      filter: grayscale(1);
    }
  }
}

.ymap-container {
  position: relative;
  margin-top: -3rem;
  width: calc(100% + 6rem);
  height: calc(100% + 6rem);
}
</style>

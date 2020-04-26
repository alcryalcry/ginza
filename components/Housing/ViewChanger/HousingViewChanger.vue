<template>
  <div class="housing-view-changer">
    <button
      class="button button--arrow"
      :class="{ 'button--active': activeView === 'list' }"
      @click="setView('list')"
    >
      <div class="icon">
        <iconList />
      </div>
      <span class="text">{{ $t('housing.listLabel') }}</span>
    </button>
    <button
      class="button button--arrow"
      :class="{ 'button--active': activeView === 'map' }"
      @click="setView('map')"
    >
      <div class="icon">
        <iconMapList />
      </div>
      <span class="text">{{ $t('housing.mapLabel') }}</span>
    </button>
  </div>
</template>

<script>
import iconList from '~/assets/svg/icon-list.svg'
import iconMapList from '~/assets/svg/icon-map-list.svg'

export default {
  name: 'HousingViewChanger',
  components: {
    iconList,
    iconMapList
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    activeView: {
      type: String,
      required: true
    }
  },
  methods: {
    setView(view) {
      this.$emit('set-view', view)
    }
  }
}
</script>

<style lang="scss" scoped>
.housing-view-changer {
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
</style>

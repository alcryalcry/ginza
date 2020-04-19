<template>
  <Section class="section--min section--apartment location">
    <HeadTitleMini :info="model" />
    <div class="location-map">
      <YandexMap :info="model" :is-marker-default="true" />
    </div>
    <div class="list">
      <LocationItem v-for="item in visibleItems" :key="item.id" :info="item" />
      <vue-slide-toggle :open="isShowMore">
        <LocationItem v-for="item in visibleItems" :key="item.id" :info="item" />
      </vue-slide-toggle>
      <div class="list-show-more">
        <button
          class="link link--brown link--tdu"
          @click="isShowMore = !isShowMore"
          v-html="isShowMore ? $t('showMore.hide') : $t('showMore.show')"
        />
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'
import LocationItem from '~/components/Location/LocationItem'
import YandexMap from '~/components/YandexMap/YandexMap'

export default {
  name: 'Location',
  components: {
    Section,
    HeadTitleMini,
    LocationItem,
    YandexMap
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    numberOfVisible: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      isShowMore: false
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    visibleItems() {
      return this.model.values.slice(0, this.numberOfVisible)
    },
    hideItems() {
      return this.model.values.slice(-this.numberOfVisible)
    }
  }
}
</script>

<style lang="scss" scoped>
.list-show-more {
  margin-top: 3rem;
}
.location-map {
  height: 50rem;
  margin-bottom: 3rem;
  @include mobile {
    height: 36rem;
  }
}
</style>

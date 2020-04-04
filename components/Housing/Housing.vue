<template>
  <Section class="housing section--gray">
    <div class="housing-content">
      <div class="row">
        <div class="col-4 col-t-4 col-m-12 sidebar">
          <div class="sidebar-content ">
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
        <div class="col-8 col-t-8 col-m-12">
          <transition mode="out-in" name="fade">
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
                    />
                  </div>
                  <div class="col-6 col-t-6 housing-list-item">
                    <HousingLink :house-type="list.id" />
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import HousingTypes from '~/components/Housing/Types/Types'
import HousingCard from '~/components/Housing/Card/Card'
import HousingLink from '~/components/Housing/Card/Link'
import Cities from '~/components/Cities/Cities'
import Section from '~/components/Utils/Section'
import iconList from '~/assets/svg/icon-list.svg'
import iconMapList from '~/assets/svg/icon-map-list.svg'
import stickyMenu from '~/mixins/stickyMenu'

export default {
  name: 'Housing',
  components: {
    Section,
    iconList,
    iconMapList,
    HousingTypes,
    HousingCard,
    HousingLink,
    Cities
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
      activeType: '',
      activeView: 'list'
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    stickyAnchors() {
      return this.model.values.map((anchor) => {
        return {
          href: anchor.id,
          id: anchor.id
        }
      })
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
      this.scrollToSection(id)
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
    .link {
      margin-left: 4rem;
    }
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

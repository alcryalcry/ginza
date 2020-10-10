<template>
  <div class="blog-filter" :class="{ isLoading, isScrolled: GET_HEADER_STATUS }">
    <div class="subheader">
      <div class="subheader-menu">
        <div ref="stickyMenuWrapper" class="subheader-top">
          <button
            ref="stickyMenuItems"
            class="subheader-link text--18"
            type="button"
            :class="{ isActive: !activeFilter }"
            @click="selectType()"
            v-html="$t('filters.all')"
          />
          <button
            v-for="type in generatedFilters"
            :key="type"
            ref="stickyMenuItems"
            class="subheader-link text--18"
            type="button"
            :class="{ isActive: activeFilter === type }"
            @click="selectType(type)"
            v-html="type"
          />
        </div>
      </div>
    </div>
    <div v-if="model.title" class="title title--h2" v-html="model.title" />
    <transition name="list-fade-long" mode="out-in">
      <div :key="formKey" class="blog-list">
        <GridList :info="{ values }" transition-mode="list-fade" />
        <div v-if="isMoreCards" class="show-more">
          <button class="show-more-btn" type="button" @click="showMore">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'
import { debounce } from 'throttle-debounce'
import { mapGetters } from 'vuex'
import MODEL from './model'
import axios from '~/plugins/axios'
import GridList from '~/components/Grid/List/GridList'
import { API_ROUTES_BLOG_ROOT } from '~/config/constants'

export default {
  name: 'BlogFilter',
  components: {
    GridList
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeFilter: null,
      values: [],
      limit: null,
      formKey: 0,
      page: 0,
      total: 0,
      isLoading: false,
      isReady: false
    }
  },
  computed: {
    ...mapGetters({
      GET_HEADER_STATUS: 'header/GET_HEADER_STATUS',
      GET_LANG: 'GET_LANG'
    }),
    model() {
      return MODEL(this.info)
    },
    paginationModel() {
      return {
        limit: this.limit,
        skip: this.page * this.limit
      }
    },
    isMoreCards() {
      return this.total > this.values.length
    },
    generatedFilters() {
      return [...new Set(this.model.filterParams)]
    }
  },
  created() {
    if (process.browser) {
      smoothscroll.polyfill()
      this.limit = this.model.cardLimit
      this.debouncedRequestCards = debounce(300, (isShowMore) => {
        this.requestCards(isShowMore)
      })
      this.debouncedRequestCards()
    }
  },
  methods: {
    selectType(id) {
      if (this.activeFilter !== id) {
        this.activeFilter = id
        scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        this.debouncedRequestCards()
      }
    },
    showMore() {
      this.debouncedRequestCards(true)
    },
    requestCards(isShowMore) {
      if (this.isLoading) {
        return
      }

      this.page = isShowMore ? this.page + 1 : 0
      this.isLoading = true
      const params = {
        tag: this.activeFilter
      }

      for (const key in this.paginationModel) {
        params[key] = this.paginationModel[key]
      }

      axios.get(API_ROUTES_BLOG_ROOT, {
        params
      }).then(({ data }) => {
        // console.log(data)
        const {
          total = 0,
          values = []
        } = data
        this.formKey++
        this.total = total
        this.values = [
          ...(isShowMore ? this.values : []),
          ...values
        ]
      }).catch((e) => {
        const {
          response = {}
        } = e || {}
        console.error(response, API_ROUTES_BLOG_ROOT)
      }).then(() => {
        this.isReady = true
        this.isLoading = false
      })
    }

  }

}
</script>

<style lang="scss" scoped>
.blog-filter {
  transition: opacity .2s ease;
  &.isScrolled {
    .subheader {
      .subheader-link {
        color: $gray;
      }
    }
  }
  .title {
    margin: 7rem 0 3rem;
    text-align: center;
    @include mobile {
      margin: 4rem 0 0;
    }
  }

  &.isLoading {
    opacity: .5;
    pointer-events: none;
  }
  .show-more {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10rem;
  }
  .show-more-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    overflow: hidden;
    background: $brown;
    transition: background-color .2s ease, transform .2s ease;
    &:active {
      background: $brownHover;
      transform: scale(1.15)
    }
    @include desktop {
      &:hover {
        background: $brownHover;
        transform: scale(1.15)
      }
    }
    * {
      display: block;
      width: 3px;
      height: 3px;
      background: $black17;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 2px;
    }
  }
  .subheader {
    position: sticky;
    position: -webkit-sticky;
    top: calc(#{$headerHeight} - .05rem);
    z-index: $zLayerSticky;
    overflow: hidden;
    @include tablet {
      top: calc(#{$headerHeightTablet} - .05rem);
      height: 4.6rem;
      left: 0;
      right: 0;
      border-bottom: 1px solid $border;
    }
    @include mobile {
      top: calc(#{$headerHeightMobile} - .05rem);
      left: 0;
      right: 0;
      height: 4rem;
      border-bottom: 1px solid $border;
    }

    .subheader-top {
      position: relative;
      display: flex;
      padding: 1rem 0;
      border-bottom: 1px solid $border;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      @include backdrop;

      @include tablet {
        padding-bottom: 2rem;
      }

      @include mobile {
        padding-bottom: 2rem;
      }

      @include tablet_desktop {
        justify-content: center;
      }
    }

    .subheader-link {
      color: $border;
      line-height: 1.4;
      margin: 0 1.5rem;
      white-space: nowrap;
      transition: color .2s ease, opacity .2s ease;
      @include desktop {
        margin: 0 3rem;
      }
      &:last-child {
        @include mobile {
          padding-right: 2rem;
        }
      }

      &.isActive,
      &:active {
        color: $black17;
      }
      @include desktop {
        &:hover {
          color: $black17;
        }
      }
    }
  }
}
</style>

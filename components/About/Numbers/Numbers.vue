<template>
  <Section class="section--min about-numbers">
    <div class="about-numbers-list">
      <div v-if="mainItem" class="item isMain">
        <div v-if="mainItem.value" class="value" v-html="mainItem.value" />
        <div v-if="mainItem.label" class="label text--28" v-html="mainItem.label" />
      </div>
      <div class="row isNoGut bt bb">
        <div class="isNoGut col-7 col-t-12 col-m-12 br">
          <div v-for="(item, index) in numbers" :key="item + index" class="item">
            <div v-if="item.value" class="value" v-html="item.value" />
            <div v-if="item.label" class="label text--22" v-html="item.label" />
          </div>
        </div>
        <div class="isNoGut col-icon col-5 col-t-12 col-m-12">
          <div class="icon">
            <iconLogoMin />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import iconLogoMin from '~/assets/svg/logo-min.svg'

export default {
  name: 'AboutNumbers',
  components: {
    Section,
    iconLogoMin
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    mainItem() {
      return this.model.find(item => item.mode === 'main')
    },
    numbers() {
      return this.model.filter(item => item.mode !== 'main')
    }
  }
}
</script>

<style lang="scss" scoped>
.about-numbers {
  .bt {
    border-top: 1px solid $border;
  }
  .bb {
    @include desktop {
      border-bottom: 1px solid $border;
    }
  }
  .br {
    @include desktop {
      border-right: 1px solid $border;
    }
  }
  .bl {
    @include desktop {
      border-left: 1px solid $border;
    }
  }
  .item {
    display: flex;
    align-items: center;
    padding: 6rem 8rem 6rem 0;
    font-weight: $light;
    @include mobile {
      padding: 4rem 0;
    }
    & + .item {
      border-top: 1px solid $border;
    }
    &.isMain {
      display: block;
      .value {
        margin: 0 0 .5rem;
      }
    }
  }
  .value {
    margin-right: 2rem;
    font-size: 12rem;
    line-height: 1;
    letter-spacing: 0.1rem;
    font-family: $fontBase;
    @include tablet {
      font-size: 8rem;
    }
    @include mobile {
      font-size: 6rem;
    }
  }

  .col-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    @include mobile_tablet {
      border-top: 1px solid $border;
    }
    @include mobile {
      padding-top: 6rem;
    }
    @include tablet {
      padding-top: 8rem;
    }
  }

  .icon {
    width: 15rem;
    height: 15rem;
    @include mobile {
      width: 10rem;
      height: 10rem;
    }
  }

}

</style>

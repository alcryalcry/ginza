<template>
  <Section class="services-additional section--full">
    <Section class="section--no-p section--min">
      <HeadTitleMini :info="model" />
    </Section>
    <Section class="section--no-p section--min">
      <div class="row">
        <div v-for="item in model.values" :key="item.title + item.url" class="col-4 col-t-6">
          <nuxt-link :to="localePath(item.url)" class="card">
            <div class="card-image">
              <picture v-if="item.image" class="image">
                <img :src="item.image" alt="">
              </picture>
            </div>
            <h5 v-if="item.title" class="title text--12 bold ttu" v-html="item.title" />
            <div v-if="item.text" class="description">
              <div class="text-wrapper">
                <div class="text text--16" v-html="item.text" />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </Section>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'

export default {
  components: {
    Section,
    HeadTitleMini
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.services-additional {
  .card {
    position: relative;
    display: block;
    @include desktop {
      &:hover {
        .card-image {
          .image {
            filter: blur(5px);
            // transition-delay: 0.2s;
          }
        }
        .description {
          opacity: 1;
          // transition-delay: 0.2s;
        }
      }
    }
  }
  .title {
    padding-left: 2rem;
    margin-top: 1rem;
  }
  .card-image {
    width: 100%;
    height: 28rem;
    overflow: hidden;
    transition: filter .2s ease;
    -webkit-transition: filter .2s ease;
    .image {
      width: 100%;
      height: 100%;
    }
  }
  .description {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 28rem;
    opacity: 0;
    overflow: hidden;
    background: rgba($white, .85);
    z-index: 1;
    transition: opacity .2s ease;
    @include mobile_tablet {
      display: none;
    }

    .text-wrapper {
      @include absolute;
      padding: 2rem;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}
</style>

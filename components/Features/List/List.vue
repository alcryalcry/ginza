<template>
  <Section class="section--full features-list">
    <Section class="section--no-p section--min">
      <HeadTitleMini :info="model" />
    </Section>
    <Section class="section--no-p section--min">
      <div class="row list">
        <div v-for="item in checkComponents" :key="item.id" class="col-6 col-t-6">
          <div class="feature">
            <div class="icon">
              <component :is="item.id" />
            </div>
            <div v-if="item.title" class="title" v-html="item.title" />
          </div>
        </div>
      </div>
    </Section>
  </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'

import batler from '~/assets/svg/features/batler.svg'
import babychair from '~/assets/svg/features/babychair.svg'
import delivery from '~/assets/svg/features/delivery.svg'
import family from '~/assets/svg/features/family.svg'
import breakfast from '~/assets/svg/features/breakfast.svg'
import elevator from '~/assets/svg/features/elevator.svg'
import coffeemachine from '~/assets/svg/features/coffeemachine.svg'
import games from '~/assets/svg/features/games.svg'
import ironing from '~/assets/svg/features/ironing.svg'
import buro from '~/assets/svg/features/buro.svg'

export default {
  components: {
    Section,
    HeadTitleMini,
    batler,
    babychair,
    delivery,
    family,
    breakfast,
    elevator,
    coffeemachine,
    games,
    ironing,
    buro
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
    },
    checkComponents() {
      return this.model.values.filter(item => !!this.$options.components[item.id])
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.features-list {
  .list {
    @include desktop {
      padding-right: 10rem;
    }
  }
  .feature {
    display: flex;
    align-items: flex-start;
  }
  .icon {
    width: 2rem;
    height: 2rem;
    margin-right: 2rem;
  }
  //
}
</style>

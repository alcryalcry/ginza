<template>
  <div v-if="GET_POPUP_TYPE === 'popupVideo'" class="popup-video">
    <Section class="section--big section--no-p popup-head">
      <div class="popup-head-row">
        <div class="popup-close">
          <button class="burger" type="button" @click="CLOSE_POPUP">
            <div class="burger-button">
              <div class="line" />
              <div class="line" />
              <div class="line" />
            </div>
          </button>
        </div>
        <div v-if="model.title" class="title text--16" v-html="model.title" />
      </div>
    </Section>
    <div v-bsl:reserveScrollBarGap="GET_POPUP_STATUS" class="popup-content">
      <Section class="section--big">
        <div class="popup-video-container">
          <VideoPreview :info="model.video" />
        </div>
      </Section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import VideoPreview from '~/components/VideoPreview/VideoPreview'

export default {
  name: 'PopupVideo',
  components: {
    Section,
    VideoPreview
  },
  computed: {
    model() {
      return MODEL(this.GET_POPUP_CONTENT)
    },
    ...mapGetters({
      GET_POPUP_TYPE: 'popup/GET_POPUP_TYPE',
      GET_POPUP_STATUS: 'popup/GET_POPUP_STATUS',
      GET_POPUP_CONTENT: 'popup/GET_POPUP_CONTENT'
    })
  },
  methods: {
    ...mapMutations({
      CLOSE_POPUP: 'popup/CLOSE_POPUP'
    })
  }
}
</script>

<style lang="scss" scoped>
.popup-video {
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
}

.title {
  text-transform: uppercase;
}

.popup-video-container {
  padding: 0 2.5rem;
  height: 64rem;
  @include mobile {
    padding: 0;
    height: 36rem;
  }
}

.popup-head {
  position: relative;
  background: transparent;
  border-bottom: 1px solid $border;
  z-index: $zLayerMenuOpenedBurgerBtn;
}

.popup-head-row {
  position: relative;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  background-color: rgba($white, 0.85);
  @include mobile {
    padding: 1.5rem 0;
  }
}

.burger {
  display: flex;
  align-items: center;
  margin-left: -1rem;
  cursor: pointer;
  &:active {
    color: $brown;
    outline: none;
  }
  @include desktop {
    &:hover {
      color: $brown;
    }
  }
}
@include burger_btn;
</style>

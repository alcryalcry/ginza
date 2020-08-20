<template>
  <div class="slider-apartment">
    <Slider
      v-if="model.values.length"
      :custom-options="customOptions"
      :has-navigation="true"
      navigation-mode="navigation--white navigation--basic"
    >
      <template v-slot:slides>
        <div
          v-for="slide in model.values"
          :key="slide.title"
          class="swiper-slide"
        >
          <div class="slider-main-slide">
            <picture class="image">
              <app-image data-manual-lazy :src="slide.image || slide.images" :alt="slide.title" /></picture>
          </div>
        </div>
      </template>
    </Slider>
    <Section class="slider-actions section--min">
      <div class="slider-actions-row">
        <button
          v-if="model.popup && model.popup.content"
          class="button button--arrow"
          @click="openPopup(model.popup)"
        >
          <div class="icon">
            <iconPlayButton />
          </div>
          <span class="text">{{ $t('apartment.showVideo') }}</span>
        </button>
        <div v-if="model.hasGallery" class="button" @click="$router.push($route.path + '/gallery')">
          {{ $t('apartment.excursion') }}
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import Slider from '~/components/Slider/Slider'
import iconPlayButton from '~/assets/svg/play-button.svg'
import popupMethods from '~/mixins/popupMethods'

export default {
  name: 'SliderApartment',
  components: {
    Section,
    iconPlayButton,
    Slider
  },
  mixins: [popupMethods],
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      customOptions: {
        loop: true,
        speed: 400,
        parallax: true,
        spaceBetween: 5,
        breakpoints: {
        }
      }
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  flex: 1 0 auto;
  width: 100%;
  @include desktop {
    min-width: 75%;
    width: 108rem;
  }
}
.slider-actions {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .slider-actions-row {
    display: flex;
    flex-flow: row wrap;
    margin: -1rem;
    .button {
      margin: 1rem;
    }
  }
}
.slider-apartment {
  position: relative;
  overflow: hidden;
}

.slider-main-slide {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  min-height: 72rem;
  overflow: hidden;
  @include tablet {
    min-height: 75vh
  }
  @include mobile {
    min-height: 70vh
  }

  .image {
    @include absolute;
    pointer-events: none;

    &::before {
      content: '';
      @include absolute;
      background: linear-gradient(180deg, rgba(50, 50, 50, 0.1) 55.68%, rgba(0, 0, 0, 0.80415) 96%);
      pointer-events: none;
      z-index: 1;
    }
  }
}
</style>

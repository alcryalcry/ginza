export default {
  data() {
    return {
      isSliderReady: false,
      activeIndex: 0
    }
  },
  computed: {
    options() {
      return {
        ...this.basicOptions,
        ...this.customOptions
      }
    },
    basicOptions() {
      return {
        speed: 500,
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: false,
        threshold: 10,
        on: {
          init: () => {
            this.isSliderReady = true
            this.updateLazySlides()
          },
          slideChange: (e) => {
            this.updateLazySlides()
            this.updateActiveSlide()
            this.$nextTick(() => {
              this.$emit('active-index', this.activeIndex)
            })
          }
        }
      }
    },
    swiper() {
      return (this.$refs.mySwiper || {}).swiper || {}
    }
  },
  methods: {
    updateActiveSlide() {
      this.activeIndex = this.swiper.realIndex
    },
    updateLazySlides() {
      if (this.$refs.sliderWrapper) {
        const slides = this.$refs.sliderWrapper.querySelectorAll('[data-manual-lazy]')
        slides.forEach(m => this.$lazyLoad(m))
      }
    }
  }
}

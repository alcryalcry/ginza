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
        ...this.generatedCustomOptions
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
          slideChange: (e) => {
            this.updateLazySlides()
            this.updateActiveSlide()
            this.$nextTick(() => {
              this.$emit('active-index', this.activeIndex)
            })
          }
        }
      }
    }
  },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        this.isSliderReady = true
        this.updateLazySlides()

        if (this.GET_MQ === 'desktop' && this.isCenteredSlides) {
          this.mySwiper.slideTo(Math.abs((this.mySwiper || {}).slides.length / 3))
        } else {
          this.mySwiper.slideTo(0)
        }
      })
    }
  },
  methods: {
    updateActiveSlide() {
      this.activeIndex = this.mySwiper.realIndex
    },
    updateLazySlides() {
      // if (this.$refs.sliderWrapper) {
      //   const slides = this.$refs.sliderWrapper.querySelectorAll('[data-manual-lazy]')
      //   slides.forEach(m => this.$lazyLoad(m))
      // }
    }
  }
}

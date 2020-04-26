import { throttle } from 'throttle-debounce'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      oldScroll: 0,
      activeLink: 1,
      sections: []
    }
  },
  computed: {
    ...mapGetters({
      GET_MQ: 'mediaQuery/GET_MQ'
    }),
    stickyAnchors() {
      return []
    }
  },
  created() {
    if (process.browser) {
      this.$nextTick(() => {
        this.init()
        this.initEvents()
      })
    }
  },
  destroyed() {
    this.destroy()
  },
  methods: {
    scrollSpy() {
      this.sections.forEach((item) => {
        const scrolledY = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        if (scrolledY >= item.position) {
          this.setActiveLink(item.id)
        }
      })
    },
    scrollToSection(id) {
      this.setSizes()
      this.$nextTick(() => {
        const currentElement = this.sections.find(section => section.id === id)
        if (currentElement) {
          // window.scrollTo({
          //   top: currentElement.position,
          //   behavior: 'smooth'
          // })
          currentElement.element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          })
        }
      })
    },
    scrollToActiveLink() {
      if (Array.isArray(this.$refs.stickyMenuItems) && this.$refs.stickyMenuWrapper) {
        const activeButton = this.$refs.stickyMenuItems.find(btn => btn.classList.contains('isActive'))
        if (activeButton) {
          this.$refs.stickyMenuWrapper.scrollTo({
            left: activeButton.offsetLeft - 75,
            behavior: 'smooth'
          })
        }
      }
    },
    setActiveLink (id) {
      this.activeLink = id
      this.activeType = id

      // if (this.GET_MQ !== 'desktop' && Math.abs(this.oldScroll - window.scrollY) > 5) {
      //   this.oldScroll = window.scrollY
      //   this.$nextTick(() => {
      //     this.scrollToActiveLink()
      //   })
      // }
    },
    setSizes() {
      this.sections = []
      this.stickyAnchors.forEach((item) => {
        const section = document.querySelector(`[data-anchor="${item.href}"]`)
        if (!section) {
          return
        }
        const sectionPos = section.getBoundingClientRect().top + window.scrollY
        const mediaCoef = this.GET_MQ === 'desktop' ? 0 : -80
        this.sections.push({
          id: item.id,
          position: sectionPos + mediaCoef,
          name: item.href,
          element: section
        })
      })
    },
    initEvents() {
      this.scrollEvent = throttle(50, () => this.scrollSpy())
      window.addEventListener('scroll', this.scrollEvent, true)
      // this.resizeEvent = debounce(1000, () => this.setSizes())
      // window.addEventListener('resize', this.resizeEvent, false)
    },
    init() {
      this.setSizes()
      this.scrollSpy()
    },
    removeEvents() {
      window.removeEventListener('scroll', this.scrollEvent, false)
      window.removeEventListener('resize', this.resizeEvent, false)
    },
    destroy() {
      this.removeEvents()
    }
  }
}

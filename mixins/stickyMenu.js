import smoothscroll from 'smoothscroll-polyfill'
import { debounce, throttle } from 'throttle-debounce'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      oldScroll: 0,
      // isShowMenu: false,
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
        smoothscroll.polyfill()
      })
    }
  },
  destroyed() {
    this.destroy()
  },
  methods: {
    scrollSpy() {
      // const parentPos = {
      //   top: this.$parent.$el.getBoundingClientRect().top + window.scrollY - 200,
      //   bottom: this.$parent.$el.getBoundingClientRect().top + window.scrollY + this.$parent.$el.offsetHeight - window.innerHeight / 1.1
      // }
      this.sections.forEach((item) => {
        const scrolledY = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        // if (this.GET_MQ === 'desktop') {
        //   this.isShowMenu = scrolledY >= parentPos.top && scrolledY < parentPos.bottom
        // }
        if (scrolledY >= item.position) {
          this.setActiveLink(item.id)
        }
      })
    },
    scrollToSection(id, offsetTop = 0) {
      this.sections.forEach((item) => {
        if (item.id === id) {
          window.scrollTo({
            top: item.position + 5 - offsetTop,
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

      if (this.GET_MQ !== 'desktop' && Math.abs(this.oldScroll - window.scrollY) > 5) {
        this.oldScroll = window.scrollY
        this.$nextTick(() => {
          this.scrollToActiveLink()
        })
      }
    },
    setSizes() {
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
          name: item.href
        })
      })
    },
    initEvents() {
      this.scrollEvent = throttle(50, () => this.scrollSpy())
      window.addEventListener('scroll', this.scrollEvent, true)
      this.resizeEvent = debounce(1000, () => this.setSizes())
      window.addEventListener('resize', this.resizeEvent, false)
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

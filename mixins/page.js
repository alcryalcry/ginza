import Popup from '~/components/Utils/Popup'
import PopupVideo from '~/components/Popup/Video/PopupVideo'
import PopupBooking from '~/components/Popup/Booking/PopupBooking'
import PopupManager from '~/components/Popup/Manager/PopupManager'
import PopupTravelLine from '~/components/Popup/TravelLine/PopupTravelLine'

import Layout from '~/components/Layout/Layout'

export default {
  components: {
    Layout,
    Popup,
    PopupVideo,
    PopupBooking,
    PopupManager,
    PopupTravelLine
  },
  computed: {
    generatedComps() {
      const capitalize = (string = '') => string.charAt(0).toUpperCase() + string.slice(1)
      return (this.components || []).map((component) => {
        const componentName = capitalize(component.name)
        return () => import('~/components/_middleware/' + componentName + '/' + componentName + '.vue')
          .then(m => m.default)
          .catch(e => import('~/components/NotFound/NotFound.vue'))
      })
    }
  },
  head() {
    const {
      title = '',
      description = '',
      image = ''
    } = this.page || {}

    return {
      title: title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
        }
      ]
    }
  }
}

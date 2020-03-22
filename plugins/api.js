import axios from '~/plugins/axios'
import { API_ROUTES_LAYOUT } from '~/config/constants'

export async function get (context, route) {
  const routeResp = await axios.get(route, {
    params: {
      lang: context.store.state.locale
    }
  }).catch((error) => {
    if (route) {
      return context.redirect('/error', {
      })
    } else {
      console.log(route)
    }
    console.error(error.response)
  })

  const layoutResp = await axios.get(API_ROUTES_LAYOUT, {
    params: {
      lang: context.store.state.locale
    }
  }).catch((error) => {
    console.error(error.response)
  })

  const {
    data: routeData = {}
  } = routeResp || {}

  const {
    data: layoutData = {}
  } = layoutResp || {}

  const {
    header = {},
    footer = {}
  } = layoutData

  return {
    pageComponents: routeData,
    header,
    footer
  }
}

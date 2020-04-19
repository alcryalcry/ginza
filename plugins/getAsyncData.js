import axios from '~/plugins/axios'
import { API_ROUTES_LAYOUT } from '~/config/constants'

export default async function get(context, route) {
  try {
    const routeResp = await axios.get(route, {
      params: {
        lang: context.store.state.locale
      }
    })
    const layoutResp = await axios.get(API_ROUTES_LAYOUT, {
      params: {
        lang: context.store.state.locale
      }
    })

    if (!routeResp) {
      console.error('routeResp')
    }
    if (!layoutResp) {
      console.error('layoutResp')
    }
    const { data: routeData = {} } = routeResp || {}

    const { data: layoutData = {} } = layoutResp || {}

    const { header = {}, footer = {} } = layoutData

    return {
      pageComponents: routeData,
      header,
      footer
    }
  } catch (error) {
    console.warn('ERROR FROM getAsyncData')
    console.warn('ERROR FROM getAsyncData')
    console.warn('ERROR FROM getAsyncData')
    console.error(error)
    // return context.redirect('/error5xx', {
    //   statusCode: error.response ? error.response.status : '500'
    // })
  }
}
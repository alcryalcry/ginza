import axios from '~/plugins/axios'

export default async function get(context, route) {
  try {
    const locale = context.store.getters.GET_LANG
    const city = context.store.getters.GET_CURRENT_CITY
    const routeResp = await axios.get(route, {
      params: { locale, city }
    })

    if (!routeResp) {
      console.error('routeResp')
    }
    const { data: routeData = {} } = routeResp || {}

    return {
      components: routeData
    }
  } catch (error) {
    console.warn('ERROR FROM getAsyncData')
  }
}

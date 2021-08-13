import axios from '~/plugins/axios'

export default async function get(context, route) {
  try {
    let params = {}
    if (process.browser) {
      const locale = context.store.getters.GET_LANG
      const city = context.store.getters['localStorage/GET_CURRENT_CITY'].id
      params = { locale, city }
    }
    const routeResp = await axios.get(route, { params })
    
    console.warn("CONTEXT", context);
    console.warn("ROUTE", route);
    console.warn("RESP", routeResp);

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

import axios from '~/plugins/axios'

export default async function get(context, route) {
  console.log(route)
  try {
    const routeResp = await axios.get(route, {
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
    console.warn('ERROR FROM getAsyncData')
    console.warn('ERROR FROM getAsyncData')
    // console.error(error)
    // console.warn(error.response)
    // return context.redirect('/error', {
    //   statusCode: error.response ? error.response.status : '500'
    // })
  }
}

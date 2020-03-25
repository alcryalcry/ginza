/* eslint-disable handle-callback-err */
import axios from '~/plugins/axios'
import { API_ROUTES_HEADER, API_ROUTES_FOOTER } from '~/config/constants'

export default async function (context, route) {
  const bodyResp = await axios.get(route, {
    params: {
      lang: context.store.state.locale
    }
  }).catch((e) => {
    if (route) {
      return context.redirect('/error', {
        statusCode: e.response
      })
    }
  })

  const headerResp = await axios.get(API_ROUTES_HEADER, {
    params: {
      lang: context.store.state.locale
    }
  }).then((ss) => {
    // console.warn(ss)
    return ss
  }).catch((error) => {
    // console.log(error.response)
  })

  const footerResp = await axios.get(API_ROUTES_FOOTER, {
    params: {
      lang: context.store.state.locale
    }
  }).then((ss) => {
    return ss
  }).catch((error) => {
    // console.log(error.response)
  })

  const {
    data: bodyData = {}
  } = bodyResp || {}

  const {
    data: headerData = {}
  } = headerResp || {}

  const {
    data: footerData = {}
  } = footerResp || {}

  const pageData = bodyData

  return {
    pageData: pageData || {},
    headerData: headerData || {},
    footerData: footerData || {}
  }
}

/* eslint-disable camelcase */
export default (info) => {
  const {
    tl_id = '',
    id = '',
    pageId = {},
    type = '',
    cityId = '',
    city = {},
    name = '',
    images = [],
    preview = '',
    coords = [],
    params = [],
    url: urlInfo = ''
  } = info

  const {
    url = '',
    title = ''
  } = pageId || {}

  const adaptedParams = (params || []).map((param) => {
    const {
      type = '',
      value = ''
    } = param
    return {
      type,
      value
    }
  })

  return {
    tl_id,
    id,
    pageId,
    type,
    cityId,
    city,
    name,
    images,
    preview,
    coords,
    params: adaptedParams,
    url: url || urlInfo,
    title
  }
}

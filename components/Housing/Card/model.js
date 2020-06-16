export default (info) => {
  const {
    TLHotelId = '',
    id = '',
    pageId = '',
    type = '',
    cityId = '',
    city = '',
    name = '',
    images = [],
    preview = '',
    coords = [],
    params = []
  } = info

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
    TLHotelId,
    id,
    pageId,
    type,
    cityId,
    city,
    name,
    images,
    preview,
    coords,
    params: adaptedParams
  }
}

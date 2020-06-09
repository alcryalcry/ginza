export default (info) => {
  const {
    TLHotelId = '',
    id = '',
    url = '',
    type = '',
    cityId = '',
    city = '',
    title = '',
    images = [],
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
    url,
    type,
    cityId,
    city,
    title,
    images,
    coords,
    params: adaptedParams
  }
}

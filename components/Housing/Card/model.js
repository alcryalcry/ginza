export default (info) => {
  const {
    slug = '',
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
    slug,
    type,
    cityId,
    city,
    title,
    images,
    coords,
    params: adaptedParams
  }
}

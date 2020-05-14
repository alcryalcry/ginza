export default (info) => {
  const {
    coords = [59.932211, 30.346072],
    markers = []
  } = info

  const adaptedMarkers = (markers || []).map((item) => {
    const {
      slug = '',
      type = '',
      cityId = '',
      city = '',
      title = '',
      images = [],
      coords = [],
      params = []
    } = item

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
      id: slug,
      type,
      cityId,
      city,
      title,
      images,
      coords,
      params: adaptedParams
    }
  })

  return {
    coords,
    markers: adaptedMarkers
  }
}

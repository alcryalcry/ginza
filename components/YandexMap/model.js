export default (info) => {
  const {
    coords = [59.932211, 30.346072],
    markers = []
  } = info

  const adaptedMarkers = (markers || []).map((item) => {
    const {
      id = '',
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
      id,
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

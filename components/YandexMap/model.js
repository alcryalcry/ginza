export default (info) => {
  const {
    coords = [59.932211, 30.346072],
    markers = []
  } = info

  const adaptedMarkers = (markers || []).map((item) => {
    const {
      pageId = '',
      id = '',
      type = '',
      cityId = '',
      city = '',
      name = '',
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
      pageId,
      id,
      type,
      cityId,
      city,
      name,
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

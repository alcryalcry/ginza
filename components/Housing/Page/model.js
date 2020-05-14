export default (info = []) => {
  const adaptedValues = (info || []).map((item) => {
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
      slug,
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
    values: adaptedValues
  }
}

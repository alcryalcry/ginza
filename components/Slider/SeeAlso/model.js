export default (info) => {
  const {
    title = '',
    url = '',
    id = '',
    linkLabel = '',
    values = []
  } = info || {}

  const adaptedValues = (values || []).map((house) => {
    const {
      slug = '',
      city = '',
      title = '',
      images = [],
      coords = [],
      params = []
    } = house

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
      city,
      title,
      images,
      coords,
      params: adaptedParams
    }
  })

  return {
    title,
    url,
    id,
    linkLabel,
    values: adaptedValues
  }
}

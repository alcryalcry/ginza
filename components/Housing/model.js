export default (info) => {
  const {
    values = []
  } = info || {}

  const adaptedValues = (values || []).map((item) => {
    const {
      title = '',
      id = '',
      linkLabel = '',
      list = []
    } = item

    const adaptedList = (list || []).map((house) => {
      const {
        slug = '',
        city = '',
        title = '',
        images = [],
        coords = {
          lat: '',
          lng: ''
        },
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
      id,
      linkLabel,
      list: adaptedList
    }
  })

  return {
    values: adaptedValues
  }
}

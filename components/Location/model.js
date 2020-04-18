export default (info) => {
  const {
    title = '',
    coords = [],
    values = []
  } = info || {}

  const adaptedValues = (values || []).map((item) => {
    const {
      id = null,
      name = '',
      distance = '',
      type = '',
      url = ''
    } = item
    return {
      id,
      name,
      distance,
      type,
      url
    }
  })

  return {
    title,
    coords,
    values: adaptedValues
  }
}

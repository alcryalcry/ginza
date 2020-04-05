export default (info) => {
  const {
    description = '',
    values = []
  } = info || {}

  const adaptedValues = (values || []).map((item) => {
    const {
      name = '',
      title = '',
      rows = []
    } = item
    return {
      name,
      title,
      rows
    }
  })

  return {
    description,
    values: adaptedValues
  }
}

export default (info) => {
  const {
    title = '',
    description = '',
    properties = {},
    values = []
  } = info
  const adaptedValues = (values || []).map((item) => {
    const {
      id = null,
      title = '',
      text = '',
      color = ''
    } = item
    return {
      id,
      title,
      text,
      color
    }
  })
  return {
    title,
    description,
    ...properties,
    values: adaptedValues
  }
}

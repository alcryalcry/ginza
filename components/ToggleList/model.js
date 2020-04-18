export default (info) => {
  const {
    title = '',
    description = '',
    values = []
  } = info
  const adaptedValues = (values || []).map((item) => {
    const {
      id = null,
      title = '',
      text = ''
    } = item
    return {
      id,
      title,
      text
    }
  })
  return {
    title,
    description,
    values: adaptedValues
  }
}

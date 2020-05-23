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
      text = '',
      table = {}
    } = item
    return {
      id,
      title,
      text,
      table
    }
  })
  return {
    title,
    description,
    values: adaptedValues
  }
}

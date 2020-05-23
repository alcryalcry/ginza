export default (info) => {
  const {
    title = '',
    mode = '',
    description = '',
    values = []
  } = info
  const adaptedValues = (values || []).map((item) => {
    const {
      id = null,
      title = '',
      text = '',
      tables = [],
      descriptionTables = ''
    } = item
    return {
      id,
      title,
      text,
      tables,
      descriptionTables
    }
  })
  return {
    title,
    mode,
    description,
    values: adaptedValues
  }
}

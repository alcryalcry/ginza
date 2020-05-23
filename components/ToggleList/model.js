export default (info) => {
  const {
    title = '',
    mode = '',
    description = '',
    values = [],
    linkLabel = '',
    popup = {}
  } = info
  const adaptedValues = (values || []).map((item) => {
    const {
      id = null,
      menu = {
        list: [],
        sum: ''
      },
      title = '',
      text = '',
      tables = [],
      descriptionTables = ''
    } = item
    return {
      id,
      menu,
      title,
      text,
      tables,
      descriptionTables
    }
  })
  return {
    title,
    mode,
    linkLabel,
    description,
    values: adaptedValues,
    popup
  }
}

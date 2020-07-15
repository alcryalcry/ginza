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
      table = [],
      descriptionTables = ''
    } = item
    return {
      id,
      menu,
      title,
      text,
      table,
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

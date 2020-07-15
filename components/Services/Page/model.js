export default (info) => {
  const {
    values = []
  } = info

  const adaptedValues = (values || []).map((item) => {
    const {
      title = '',
      description = '',
      linkLabel = '',
      url = '',
      tag = '',
      preview = ''
    } = item

    return {
      title,
      description,
      linkLabel,
      url,
      tag,
      preview
    }
  })
  return {
    values: adaptedValues
  }
}

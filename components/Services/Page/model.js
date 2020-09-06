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
      preview = '',
      city = {}
    } = item

    return {
      title,
      description,
      linkLabel,
      url,
      tag,
      preview,
      city
    }
  })
  return {
    values: adaptedValues
  }
}

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
      image = '',
      color = '',
      isInverted = false
    } = item

    return {
      title,
      description,
      linkLabel,
      url,
      tag,
      image,
      color,
      isInverted
    }
  })
  return {
    values: adaptedValues
  }
}

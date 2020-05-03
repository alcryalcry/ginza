export default (info) => {
  const {
    title = '',
    description = '',
    descriptionIcon = false,
    url = '',
    values = []
  } = info

  const adaptedValues = (values || []).map((item) => {
    const {
      url = '',
      title = '',
      mode = '',
      image = ''
    } = item
    return {
      url,
      title,
      mode,
      image
    }
  })

  return {
    title,
    description,
    descriptionIcon,
    url,
    values: adaptedValues
  }
}

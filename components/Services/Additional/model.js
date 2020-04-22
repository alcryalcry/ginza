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
      image = ''
    } = item
    return {
      url,
      title,
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

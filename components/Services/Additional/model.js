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
      image = '',
      text = ''
    } = item
    return {
      url,
      title,
      image,
      text
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

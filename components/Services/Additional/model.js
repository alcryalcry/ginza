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
      image = '',
      preview = ''
    } = item
    return {
      url,
      title,
      mode,
      image,
      preview
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

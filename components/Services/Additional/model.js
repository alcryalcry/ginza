export default (info) => {
  const {
    title = '',
    description = '',
    descriptionIcon = false,
    values = []
  } = info

  const adaptedValues = [...values].filter(value => value).map((item) => {
    const {
      title = '',
      mode = '',
      image = '',
      preview = '',
      url = ''
    } = item
    return {
      title,
      mode,
      image,
      preview,
      url
    }
  })

  return {
    title,
    description,
    descriptionIcon,
    values: adaptedValues
  }
}

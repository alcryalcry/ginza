export default (info) => {
  const {
    title = '',
    description = '',
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
    url,
    values: adaptedValues
  }
}

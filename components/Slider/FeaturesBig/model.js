export default (info) => {
  console.log(info)
  const {
    navigationMode = '',
    values = []
  } = info || {}

  const adaptedSlides = Array.isArray(values) ? (values || []).map((item) => {
    const {
      id = null,
      title = '',
      description = '',
      url = '',
      linkLabel = '',
      name = '',
      image = ''
    } = item
    return {
      id,
      title,
      description,
      url,
      linkLabel,
      name,
      image
    }
  }) : []

  return {
    navigationMode,
    values: adaptedSlides
  }
}

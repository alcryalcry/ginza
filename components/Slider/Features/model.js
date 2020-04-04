export default (info) => {
  const {
    title = '',
    description = '',
    subtext = '',
    afterText = '',
    url = '',
    linkLabel = '',
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
    const {
      id = null,
      name = '',
      image = '',
      mode = ''
    } = item
    return {
      id,
      name,
      image,
      mode
    }
  })

  return {
    title,
    description,
    subtext,
    afterText,
    url,
    linkLabel,
    values: adaptedSlides
  }
}

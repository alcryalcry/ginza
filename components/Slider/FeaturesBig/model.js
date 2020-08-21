export default (info) => {
  const {
    navigationMode = '',
    values = []
  } = info || {}

  const adaptedSlides = Array.isArray(values) ? (values || []).map((item) => {
    const {
      id = null,
      title = '',
      linkLabel = '',
      pageId = {},
      name = '',
      image = '',
      preview = ''
    } = item
    const {
      url = '',
      description = ''
    } = pageId || {}
    return {
      id,
      title,
      description,
      url,
      linkLabel,
      name,
      image,
      preview
    }
  }) : []

  return {
    navigationMode,
    values: adaptedSlides
  }
}

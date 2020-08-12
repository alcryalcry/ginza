export default (info) => {
  const {
    title = '',
    url = '',
    linkLabel = '',
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
    const {
      id = null,
      name = '',
      image = '',
      preview = '',
      title = '',
      pageId = {}
    } = item
    const {
      url = ''
    } = pageId || {}
    return {
      id,
      name,
      image,
      preview,
      title,
      url
    }
  })

  return {
    title,
    url,
    linkLabel,
    values: adaptedSlides
  }
}

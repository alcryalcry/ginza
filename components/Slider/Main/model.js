export default (info) => {
  const {
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
    const {
      type = '',
      videoSrc = '',
      name = '',
      city = {},
      pageId = {},
      category = '',
      linkLabel = '',
      image = '',
      preview = ''
    } = item
    const cityName = (city || {}).name
    const {
      url = ''
    } = pageId || {}

    return {
      type,
      videoSrc,
      name,
      city: cityName,
      category,
      url,
      linkLabel,
      image,
      preview
    }
  })

  return {
    values: adaptedSlides
  }
}

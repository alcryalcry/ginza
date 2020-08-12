export default (info) => {
  const {
    mode = '',
    modeSlider = '',
    title = '',
    hasTabs = false,
    isArrow = false,
    description = '',
    subtext = '',
    afterText = '',
    beforeText = '',
    url = '',
    linkLabel = '',
    values = [],
    services = []
  } = info || {}

  const adaptedSlides = Array.isArray(values) ? (values || []).map((item) => {
    const {
      id = null,
      linkLabel = '',
      slides = [],
      pageId = {},
      name = '',
      image = '',
      preview = '',
      mode = ''
    } = item
    const {
      url = ''
    } = pageId || {}
    return {
      id,
      url,
      linkLabel,
      slides,
      name,
      image,
      preview,
      mode
    }
  }) : []

  return {
    mode,
    isArrow,
    modeSlider,
    hasTabs,
    title,
    description,
    subtext,
    afterText,
    beforeText,
    url,
    linkLabel,
    services,
    values: adaptedSlides
  }
}

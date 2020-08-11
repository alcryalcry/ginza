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
      url = '',
      linkLabel = '',
      slides = [],
      name = '',
      image = '',
      mode = ''
    } = item
    return {
      id,
      url,
      linkLabel,
      slides,
      name,
      image,
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

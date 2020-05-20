export default (info) => {
  const {
    mode = '',
    modeSlider = '',
    title = '',
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

  const adaptedSlides = (values || []).map((item) => {
    const {
      id = null,
      url = '',
      name = '',
      image = '',
      mode = ''
    } = item
    return {
      id,
      url,
      name,
      image,
      mode
    }
  })

  return {
    mode,
    isArrow,
    modeSlider,
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

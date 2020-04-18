export default (info) => {
  const {
    mode = '',
    modeSlider = '',
    title = '',
    description = '',
    subtext = '',
    afterText = '',
    url = '',
    linkLabel = '',
    values = [],
    services = []
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
    mode,
    modeSlider,
    title,
    description,
    subtext,
    afterText,
    url,
    linkLabel,
    services,
    values: adaptedSlides
  }
}

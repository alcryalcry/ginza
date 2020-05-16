export default (info) => {
  const {
    image = '',
    imageDescription = '',
    url = '',
    linkLabel = '',
    description = '',
    links = [],
    values = []
  } = info

  const adaptedLinks = (links || []).map((item) => {
    const {
      url = '',
      linkLabel = ''
    } = item
    return {
      url,
      linkLabel
    }
  })

  const adaptedValues = (values || []).map((item) => {
    const {
      value = '',
      label = '',
      mode = ''
    } = item
    return {
      value,
      label,
      mode
    }
  })
  return {
    image,
    imageDescription,
    url,
    linkLabel,
    description,
    links: adaptedLinks,
    values: adaptedValues
  }
}

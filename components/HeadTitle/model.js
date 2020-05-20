export default (info) => {
  const {
    title = '',
    description = '',
    subtext = '',
    url = '',
    links = [],
    features = {},
    linkLabel = '',
    isArrow = false
  } = info || {}

  return {
    title,
    description,
    subtext,
    url,
    links,
    features,
    linkLabel,
    isArrow
  }
}

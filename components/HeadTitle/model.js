export default (info) => {
  const {
    title = '',
    description = '',
    subtext = '',
    url = '',
    links = [],
    features = {},
    linkLabel = ''
  } = info || {}

  return {
    title,
    description,
    subtext,
    url,
    links,
    features,
    linkLabel
  }
}

export default (info) => {
  const {
    title = '',
    description = '',
    subtext = '',
    url = '#',
    linkLabel = ''
  } = info || {}

  return {
    title,
    description,
    subtext,
    url,
    linkLabel
  }
}

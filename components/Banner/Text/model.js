export default (info) => {
  const {
    title = '',
    description = '',
    url = '#',
    linkLabel = ''
  } = info || {}

  return {
    title,
    description,
    url,
    linkLabel
  }
}

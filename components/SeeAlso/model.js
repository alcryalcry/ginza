export default (info) => {
  const {
    slug = '',
    linkLabel = ''
  } = info
  return {
    slug,
    linkLabel
  }
}

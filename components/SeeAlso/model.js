export default (info) => {
  const {
    url = '',
    linkLabel = ''
  } = info
  return {
    url,
    linkLabel
  }
}

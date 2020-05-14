export default (info) => {
  const {
    title = '',
    url = '',
    id = '',
    linkLabel = '',
    values = []
  } = info || {}

  return {
    title,
    url,
    id,
    linkLabel,
    values
  }
}

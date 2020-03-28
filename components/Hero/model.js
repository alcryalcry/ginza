export default (info) => {
  const {
    title = '',
    city = '',
    category = '',
    url = '',
    linkLabel = '',
    image = ''
  } = info || {}

  return {
    title,
    city,
    category,
    url,
    linkLabel,
    image
  }
}

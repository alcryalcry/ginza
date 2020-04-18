export default (info) => {
  const {
    title = '',
    description = '',
    url = '',
    descriptionIcon = false
  } = info || {}

  return {
    title,
    description,
    url,
    descriptionIcon
  }
}

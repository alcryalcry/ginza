export default (info) => {
  const {
    title = '',
    description = '',
    url = ''
  } = info || {}

  return {
    title,
    description,
    url
  }
}

export default (info) => {
  const {
    description = '',
    image = ''
  } = info || {}

  return {
    description,
    image
  }
}

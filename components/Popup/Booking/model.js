export default (info) => {
  const {
    image = '',
    logo = '',
    fields = []
  } = info || {}

  return {
    image,
    logo,
    fields
  }
}

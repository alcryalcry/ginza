export default (info) => {
  const {
    tag = '',
    title = '',
    description = '',
    image = '',
    values = []
  } = info

  return {
    tag,
    title,
    description,
    image,
    values
  }
}

export default (info) => {
  const {
    tag = '',
    label = '',
    title = '',
    description = '',
    image = '',
    values = []
  } = info

  return {
    tag,
    label,
    title,
    description,
    image,
    values
  }
}

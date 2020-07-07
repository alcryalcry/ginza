export default (info) => {
  const {
    title = '',
    text = '',
    values = []
  } = info || {}

  return {
    title,
    text,
    values
  }
}

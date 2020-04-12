export default (info) => {
  const {
    title = '',
    description = ''
  } = info || {}

  return {
    title,
    description
  }
}

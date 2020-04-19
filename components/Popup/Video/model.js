export default (info) => {
  const {
    title = '',
    video = {}
  } = info || {}

  return {
    title,
    video
  }
}

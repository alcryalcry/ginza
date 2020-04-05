export default (info) => {
  const {
    videoSrc = '',
    image = ''
  } = info || {}

  return {
    videoSrc,
    image
  }
}

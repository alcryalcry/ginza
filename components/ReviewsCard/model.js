export default (info) => {
  const {
    id = '',
    image = '',
    userName = '',
    text = ''
  } = info
  return {
    id,
    image,
    userName,
    text
  }
}

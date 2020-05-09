export default (info) => {
  const {
    title = '',
    text = '',
    moreText
  } = info
  return {
    title,
    text,
    moreText
  }
}

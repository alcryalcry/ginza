export default (info) => {
  const {
    title = '',
    image = '',
    tag = '',
    resultTitle = '',
    resultDescription = '',
    fields = []
  } = info || {}

  return {
    title,
    image,
    tag,
    resultTitle,
    resultDescription,
    fields
  }
}

export default (info) => {
  const {
    title = '',
    image = '',
    tag = '',
    disclaimer = '',
    resultTitle = '',
    resultDescription = '',
    fields = []
  } = info || {}

  return {
    title,
    image,
    tag,
    disclaimer,
    resultTitle,
    resultDescription,
    fields
  }
}

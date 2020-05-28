export default (info) => {
  const {
    url = '/',
    linkLabel = 'О проекте',
    downloadUrl = '/',
    description = '',
    image = '',
    disclaimer = '',
    resultTitle = '',
    resultDescription = '',
    fields = []
  } = info || {}

  return {
    description,
    image,
    url,
    linkLabel,
    downloadUrl,
    disclaimer,
    resultTitle,
    resultDescription,
    fields
  }
}

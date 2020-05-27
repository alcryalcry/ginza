export default (info) => {
  const {
    url = '/',
    linkLabel = 'О проекте',
    downloadLinkLabel = 'Получить презентацию',
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
    downloadLinkLabel,
    downloadUrl,
    disclaimer,
    resultTitle,
    resultDescription,
    fields
  }
}

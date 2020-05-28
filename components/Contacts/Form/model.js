export default (info) => {
  const {
    contacts = [],
    social = [],
    downloadLinkLabel = 'Получить презентацию',
    downloadUrl = '/',
    description = '',
    image = '',
    disclaimer = '',
    resultTitle = '',
    resultDescription = '',
    fields = []
  } = info || {}

  const adaptedContacts = (contacts || []).map((item) => {
    const {
      title = '',
      href = '',
      label = ''
    } = item
    return {
      title,
      href,
      label
    }
  })

  return {
    social,
    contacts: adaptedContacts,
    description,
    image,
    downloadLinkLabel,
    downloadUrl,
    disclaimer,
    resultTitle,
    resultDescription,
    fields
  }
}

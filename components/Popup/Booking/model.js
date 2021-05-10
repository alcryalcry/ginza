export default (info) => {
  const {
    id = '',
    pageId = '',
    path = '',
    image = '',
    logo = '',
    resultTitle = '',
    resultDescription = '',
    resultLink = {
      href: '',
      label: ''
    },
    fields = []
  } = info || {}

  return {
    id,
    pageId,
    path,
    image,
    logo,
    resultTitle,
    resultDescription,
    resultLink,
    fields
  }
}

export default (info) => {
  const {
    id = '',
    phone = '',
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
    phone,
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

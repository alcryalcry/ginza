export default (info) => {
  const {
    id = '',
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
    path,
    image,
    logo,
    resultTitle,
    resultDescription,
    resultLink,
    fields
  }
}

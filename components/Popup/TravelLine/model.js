export default (info) => {
  const {
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
    image,
    logo,
    resultTitle,
    resultDescription,
    resultLink,
    fields
  }
}

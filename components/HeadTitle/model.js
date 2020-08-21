export default (info) => {
  const {
    title = '',
    description = '',
    subtext = '',
    url = '',
    links = [],
    features = {},
    linkLabel = '',
    tag = '',
    isPopupContacts = false,
    isArrow = false,
    popup = {},
    properties = {}
  } = info || {}

  return {
    title,
    description,
    subtext,
    url,
    links,
    features,
    linkLabel,
    tag,
    isPopupContacts,
    isArrow,
    popup,
    properties
  }
}

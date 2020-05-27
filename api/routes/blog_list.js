module.exports = function (params, res) {
  const {
    limit = 0,
    skip = 0,
    category = ''
  } = params

  const values = []
  const titles = ['Эрмитаж', 'Заголовок блога', 'Заголовок новости']
  const labels = [
    {
      id: 'news',
      label: '17/07'
    },
    {
      id: 'travels',
      label: 'Путешествия'
    },
    {
      id: 'tops',
      label: 'Топы'
    },
    {
      id: 'weddings',
      label: 'Свадебное'
    },
    {
      id: 'restaurants',
      label: 'Рестораны'
    },
    {
      id: 'leisure',
      label: 'Досуг'
    },
    {
      id: 'food',
      label: 'Еда'
    }
  ]

  for (let i = 0; i < 20; i++) {
    const index = i % labels.length
    values.push({
      id: i,
      mode: (i + 1) % 3 === 0 ? 'size-full' : 'size-half',
      category: labels[index].id,
      label: labels[index].label,
      title: titles[i % 3],
      image: `/images/gallery/gallery-1-${i % 3 + 1}.jpg`,
      url: 'blog/hermitage',
      linkLabel: 'Подробнее'
    })
  }

  const filteredValues = category ? values.filter(item => item.category === category) : values
  const slicedFilteredValues = (skip && limit) ? [...filteredValues].splice(skip, limit) : filteredValues

  res.jsonp({
    total: filteredValues.length,
    values: slicedFilteredValues
  })
}

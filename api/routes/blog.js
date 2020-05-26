module.exports = {
  title: 'Культура и события',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'blog_filter',
      title: 'Культура & События',
      properties: {
        cardLimit: 7,
        filterParams: [
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
      }
    }
  ]
}

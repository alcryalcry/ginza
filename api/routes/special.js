module.exports = {
  title: 'Спецпредложения',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'grid_list',
      title: 'Спецпредложения',
      values: [
        {
          id: 1,
          mode: 'size-half',
          title: 'Свадебные предложения',
          image: '/images/big/weddings.png',
          url: '/special/weddings',
          linkLabel: 'Подробнее'
        },
        {
          id: 2,
          mode: 'size-half',
          title: 'Индивидуальный сервис',
          image: '/images/big/ind.jpg',
          url: '/special/individual',
          linkLabel: 'Подробнее'
        }
      ]
    },
    {
      name: 'breadcrumbs',
      values: [
        {
          url: '/',
          linkLabel: 'Главная'
        },
        {
          url: null,
          linkLabel: 'Спецпредложения'
        }
      ]
    }
  ]
}

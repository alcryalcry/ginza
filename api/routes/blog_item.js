module.exports = {
  title: 'Событие One',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'services_head',
      properties: {
        tag: 'Путешествия',
        label: '17/07',
        title: 'Заголовок',
        description: 'Совершенный свадебный день и запоминающийся вечер перед главным событием в апартаментах от Ginza Project. Если Вы в поиске идеальной локации для самого важного события, Вас ждут в Ginza Hotels & Apartments - дизайнерских апартаментах в центре города с высоким уровнем сервиса и особыми предложениями для будущих молодоженов. Именно детали создают настроение праздника. В Ginza Hotels & Apartments продумано все до мелочей, чтобы Вы наслаждались самим событием.',
        image: '/images/feature/feature-big.jpg'
      }
    },
    {
      name: 'breadcrumbs',
      values: [
        {
          url: '/',
          linkLabel: 'Главная'
        },
        {
          url: '/blog',
          linkLabel: 'Культура & События'
        },
        {
          url: null,
          linkLabel: 'Путешествия'
        }
      ]
    }
  ]
}

module.exports = {
  title: 'Главная страница',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'hero',
      title: 'Karavannaya 11',
      city: 'Санкт-Петербург',
      category: 'Апартаменты',
      url: '/',
      linkLabel: 'Посмотреть',
      image: '/images/DSC04920.jpg'
    },
    {
      name: 'slider_features',
      title: 'Продуманный дизайн до мелочей для комфортного пребывания.',
      url: '/',
      linkLabel: 'Подробнее',
      slides: [
        {
          id: 1,
          mode: 'vertical',
          name: 'Завтраки в постель',
          image: '/images/feature-1.jpg'
        },
        {
          id: 2,
          mode: 'horizontal',
          name: '20% скидка в ресторанах Ginza Project ',
          image: '/images/feature-2.jpg'
        },
        {
          id: 3,
          mode: 'vertical',
          name: 'Сервис 24/7',
          image: '/images/feature-3.jpg'
        },
        {
          id: 4,
          mode: 'vertical',
          name: 'Расположение в центре города',
          image: '/images/feature-4.jpg'
        },
        {
          id: 5,
          mode: 'horizontal',
          name: 'Стильные интерьеры',
          image: '/images/feature-5.jpg'
        },
        {
          id: 6,
          mode: 'horizontal',
          name: 'Персональный вход',
          image: '/images/feature-6.jpg'
        },
        {
          id: 7,
          mode: 'vertical',
          name: 'VIP-экскурсии по городу',
          image: '/images/feature-7.jpg'
        }
      ]
    },
    {
      name: 'banner_text',
      title: 'Индивидуальный сервиc',
      description: 'Мы очень любим своих гостей и делаем все, чтобы они провели свой отдых в Санкт-Петербурге незабываемо. Для лучшего обслуживания мы подготовили для Вас премиальный сервис, услуги которого постоянно обновляются.',
      url: '/',
      linkLabel: 'Подробнее'
    },
    {
      name: 'slider_news',
      title: 'Блог',
      url: '/',
      linkLabel: 'Подробнее',
      slides: [
        {
          id: 1,
          name: 'Заголовок блога',
          image: '/images/blog-1.jpg'
        },
        {
          id: 2,
          name: 'Топ 10 мест для посещения',
          image: '/images/blog-2.jpg'
        },
        {
          id: 3,
          name: 'Заголовок новости',
          image: '/images/blog-3.jpg'
        },
        {
          id: 4,
          name: 'Заголовок блога',
          image: '/images/blog-4.jpg'
        },
        {
          id: 5,
          name: 'Топ 10 мест для посещения',
          image: '/images/blog-5.jpg'
        },
        {
          id: 6,
          name: 'Персональный вход',
          image: '/images/blog-6.jpg'
        },
        {
          id: 7,
          name: 'VIP-экскурсии по городу',
          image: '/images/blog-7.jpg'
        }
      ]
    },
    {
      name: 'banner_love',
      title: 'Сделано с любовью!'
    }
  ]
}

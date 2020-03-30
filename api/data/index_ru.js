module.exports = {
  title: 'Главная страница',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'slider_main',
      slides: [
        {
          title: 'Karavannaya 11',
          city: 'Санкт-Петербург',
          category: 'Апартаменты',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/DSC04920.jpg'
        },
        {
          title: 'Rubinsteina 12',
          city: 'Санкт-Петербург',
          category: 'Апартаменты',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/feature-big-1.jpg'
        },
        {
          title: 'Khedi',
          city: 'Тбилиси',
          category: 'Отель',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/feature-big-2.jpg'
        }
      ]
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
          image: '/images/feature-1.jpg'
        },
        {
          id: 5,
          mode: 'horizontal',
          name: 'Стильные интерьеры',
          image: '/images/feature-2.jpg'
        },
        {
          id: 6,
          mode: 'horizontal',
          name: 'Персональный вход',
          image: '/images/feature-3.jpg'
        },
        {
          id: 7,
          mode: 'vertical',
          name: 'VIP-экскурсии по городу',
          image: '/images/feature-1.jpg'
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
      name: 'slider_features_big',
      slides: [
        {
          id: 1,
          name: '0 Экскурсии и туры',
          title: '0 Незабываемые экскурсии',
          description: 'Романтичная обстановка, уютные номера, приятные сюрпризы, отменное обслуживание — все это обеспечит уединенный и незабываемый отдых в Ginza Hotels & Apartments.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/feature-big-1.jpg'
        },
        {
          id: 2,
          name: '1 Свадебные пакеты',
          title: '1 Незабываемые моменты',
          description: 'Романтичная обстановка, уютные номера, приятные сюрпризы.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/blog-2.jpg'
        },
        {
          id: 3,
          name: '2 Beauty concierge',
          title: '2 Незабываемый Beauty concierge',
          description: 'Все это обеспечит уединенный и незабываемый отдых в Ginza Hotels & Apartments.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/blog-3.jpg'
        }
      ]
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
          image: '/images/blog-1.jpg'
        },
        {
          id: 5,
          name: 'Топ 10 мест для посещения',
          image: '/images/blog-2.jpg'
        },
        {
          id: 6,
          name: 'Персональный вход',
          image: '/images/blog-3.jpg'
        },
        {
          id: 7,
          name: 'VIP-экскурсии по городу',
          image: '/images/blog-1.jpg'
        }
      ]
    },
    {
      name: 'banner_love',
      title: 'Сделано с любовью!'
    }
  ]
}

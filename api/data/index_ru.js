module.exports = {
  title: 'Главная страница',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'booking_mini'
    },
    {
      name: 'slider_main',
      values: [
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
          image: 'https://picsum.photos/id/604/1440/700'
        },
        {
          title: 'Khedi',
          city: 'Тбилиси',
          category: 'Отель',
          url: '/',
          linkLabel: 'Посмотреть',
          image: 'https://picsum.photos/id/594/1440/700'
        }
      ]
    },
    {
      name: 'slider_features',
      title: 'Продуманный дизайн до мелочей для комфортного пребывания.',
      url: '/',
      linkLabel: 'Подробнее',
      mode: '',
      values: [
        {
          id: 1,
          mode: 'vertical',
          name: 'Завтраки в постель',
          image: 'https://picsum.photos/id/106/300/460'
        },
        {
          id: 2,
          mode: 'horizontal',
          name: '20% скидка в ресторанах Ginza Project ',
          image: 'https://picsum.photos/id/1060/540/370'
        },
        {
          id: 3,
          mode: 'vertical',
          name: 'Сервис 24/7',
          image: 'https://picsum.photos/id/1062/300/460'
        },
        {
          id: 4,
          mode: 'vertical',
          name: 'Расположение в центре города',
          image: 'https://picsum.photos/id/106/300/460'
        },
        {
          id: 5,
          mode: 'horizontal',
          name: 'Стильные интерьеры',
          image: 'https://picsum.photos/id/1060/540/370'
        },
        {
          id: 6,
          mode: 'horizontal',
          name: 'Персональный вход',
          image: 'https://picsum.photos/id/1062/540/370'
        },
        {
          id: 7,
          mode: 'vertical',
          name: 'VIP-экскурсии по городу',
          image: 'https://picsum.photos/id/106/300/460'
        }
      ]
    },
    {
      name: 'Housing',
      values: [
        {
          title: 'Апартаменты',
          id: 'apartments',
          linkLabel: 'Все апартаменты',
          list: [
            {
              slug: 'rubinsteina12',
              city: 'Санкт-Петербург',
              title: 'Rubinsteina 12',
              images: [
                'https://picsum.photos/id/580/300/400',
                'https://picsum.photos/id/57/300/400',
                'https://picsum.photos/id/58/300/400'
              ],
              coords: [59.932211, 30.346072],
              params: [
                {
                  type: 'beds',
                  value: '3'
                },
                {
                  type: 'adult',
                  value: '4'
                },
                {
                  type: 'size',
                  value: '57м'
                }
              ]
            },
            {
              slug: 'karavannaya11',
              city: 'Санкт-Петербург',
              title: 'Karavannaya 11',
              images: [
                'https://picsum.photos/id/57/300/400',
                'https://picsum.photos/id/580/300/400',
                'https://picsum.photos/id/58/300/400'
              ],
              coords: [59.032211, 30.446072],
              params: [
                {
                  type: 'beds',
                  value: '3'
                },
                {
                  type: 'adult',
                  value: '4-6'
                },
                {
                  type: 'size',
                  value: '100м'
                }
              ]
            },
            {
              slug: 'moskovskiy191',
              city: 'Санкт-Петербург',
              title: 'Moskovskiy 191',
              images: [
                'https://picsum.photos/id/58/300/400',
                'https://picsum.photos/id/57/300/400',
                'https://picsum.photos/id/580/300/400'
              ],
              coords: [59.232211, 30.906072],
              params: [
                {
                  type: 'beds',
                  value: '3'
                },
                {
                  type: 'adult',
                  value: '4'
                },
                {
                  type: 'size',
                  value: '60м'
                }
              ]
            }
          ]
        },
        {
          title: 'Отели',
          id: 'hotels',
          linkLabel: 'Все отели',
          list: [
            {
              slug: 'dom16',
              city: 'Санкт-Петербург',
              title: 'Dom 16',
              images: [
                'https://picsum.photos/id/58/300/400',
                'https://picsum.photos/id/580/300/400',
                'https://picsum.photos/id/58/300/400'
              ],
              coords: [59.532211, 30.99072],
              params: [
                {
                  type: 'text',
                  value: '1 номер'
                }
              ]
            },
            {
              slug: 'kvartira14',
              city: 'Санкт-Петербург',
              title: 'Kvartira 14',
              images: [
                'https://picsum.photos/id/580/300/400',
                'https://picsum.photos/id/57/300/400',
                'https://picsum.photos/id/58/300/400'
              ],
              coords: [59.552211, 30.096072],
              params: [
                {
                  type: 'text',
                  value: '3 номера'
                }
              ]
            },
            {
              slug: 'khedi',
              city: 'Тбилиси, Грузия',
              title: 'Khedi',
              images: [
                'https://picsum.photos/id/57/300/400',
                'https://picsum.photos/id/580/300/400',
                'https://picsum.photos/id/58/300/400'
              ],
              coords: [59.792211, 30.556072],
              params: [
                {
                  type: 'text',
                  value: '60 номеров'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'banner_sale',
      description: 'Отель, мини-отель или апартаменты, какой бы формат размещения от Ginza Hotels & Apartments Вы не выбрали – Вас ждет сервис премиум класса. Забронировать стол в ресторане, заказать доставку еды или свежих цветов, организовать билеты в театр, сдать вещи в химчистку, быстро убрать апартаменты - все бытовые вопросы решаются моментально после звонка персональному менеджеру.',
      url: '/',
      linkLabel: 'Ещё',
      values: [
        {
          description: 'при бронировании апартаментов для всех держателей карт Ginza Team Silver и Ginza Team Gold.',
          sale: '20%',
          label: 'скидка',
          logo: '/images/logo-hotels.svg',
          image: '/images/rest-image.jpg'
        },
        {
          description: 'на меню ресторанов <br/>Ginza Project',
          sale: '20%',
          logo: '/images/logo-rest.svg',
          image: '/images/hotels-image.jpg'
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
      values: [
        {
          id: 1,
          name: '0 Экскурсии и туры',
          title: '0 Незабываемые экскурсии',
          description: 'Романтичная обстановка, уютные номера, приятные сюрпризы, отменное обслуживание — все это обеспечит уединенный и незабываемый отдых в Ginza Hotels & Apartments.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: 'https://picsum.photos/id/593/1440/700'
        },
        {
          id: 2,
          name: '1 Свадебные пакеты',
          title: '1 Незабываемые моменты',
          description: 'Романтичная обстановка, уютные номера, приятные сюрпризы.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: 'https://picsum.photos/id/594/1440/700'
        },
        {
          id: 3,
          name: '2 Beauty concierge',
          title: '2 Незабываемый Beauty concierge',
          description: 'Все это обеспечит уединенный и незабываемый отдых в Ginza Hotels & Apartments.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: 'https://picsum.photos/id/596/1440/700'
        }
      ]
    },
    {
      name: 'slider_news',
      title: 'Блог',
      url: '/',
      linkLabel: 'Подробнее',
      values: [
        {
          id: 1,
          title: 'Заголовок блога',
          image: 'https://picsum.photos/id/605/250/270'
        },
        {
          id: 2,
          title: 'Топ 10 мест для посещения',
          image: 'https://picsum.photos/id/609/250/270'
        },
        {
          id: 3,
          title: 'Заголовок новости',
          image: 'https://picsum.photos/id/61/250/270'
        },
        {
          id: 4,
          title: 'Заголовок блога',
          image: 'https://picsum.photos/id/613/250/270'
        },
        {
          id: 5,
          title: 'Топ 10 мест для посещения',
          image: 'https://picsum.photos/id/619/250/270'
        },
        {
          id: 6,
          title: 'Персональный вход',
          image: 'https://picsum.photos/id/620/250/270'
        },
        {
          id: 7,
          title: 'VIP-экскурсии по городу',
          image: 'https://picsum.photos/id/621/250/270'
        }
      ]
    },
    {
      name: 'banner_love',
      title: 'Сделано с любовью!'
    }
  ]
}

module.exports = {
  title: 'Главная страница',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'fixed_actions',
      properties: {
        mode: 'booking--main'
      },
      values: [
        {
          id: 'city',
          type: 'cities',
          label: 'Выберите город'
        },
        {
          id: 'date',
          type: 'link',
          href: '#',
          label: 'Даты'
        },
        {
          id: 'count',
          type: 'link',
          href: '#',
          label: 'Гостей'
        },
        {
          id: 'booking',
          type: 'popup',
          label: 'Бронировать',
          isMobile: true,
          popup: {
            type: 'popupTravelLine',
            content: {
              image: '/images/restaurant/restaurant-full.jpg',
              logo: '/images/restaurant-logo.svg',
              resultTitle: 'Вы забронировали столик',
              resultDescription: 'Через несколько минут с Вами свяжется менеджер для уточнения деталей.',
              resultLink: {
                href: 'tel:88002012173',
                label: '8 800 201-21-73'
              },
              fields: [
                {
                  type: 'cities',
                  label: 'Выберите город',
                  name: 'cities',
                  validate: [
                    {
                      rule: 'required'
                    }
                  ]
                },
                {
                  type: 'counter',
                  label: 'Взрослых',
                  name: 'adult',
                  minValue: 1,
                  mode: 'half',
                  validate: [
                    {
                      rule: 'counter'
                    }
                  ]
                },
                {
                  type: 'counter',
                  label: 'Детей',
                  name: 'child',
                  minValue: 0,
                  mode: 'half',
                  validate: [
                    {
                      rule: 'counter'
                    }
                  ]
                },
                {
                  type: 'datesRange',
                  label: 'Даты',
                  name: 'datesRange',
                  validate: [
                    {
                      rule: 'required'
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      name: 'slider_main',
      values: [
        {
          title: 'Karavannaya 11',
          city: 'Санкт-Петербург',
          category: 'Апартаменты',
          url: 'apartments/karabannaya11',
          linkLabel: 'Посмотреть',
          image: '/images/main/main-1.jpg'
        },
        {
          title: 'Rubinsteina 12',
          city: 'Санкт-Петербург',
          category: 'Апартаменты',
          url: 'apartments/rubinsteina12',
          linkLabel: 'Посмотреть',
          image: '/images/main/main-2.jpg'
        },
        {
          title: 'Khedi',
          city: 'Тбилиси',
          category: 'Отель',
          url: 'hotels/khedi',
          linkLabel: 'Посмотреть',
          image: '/images/main/main-3.jpg'
        }
      ]
    },
    {
      name: 'slider_features',
      properties: {
        title: 'Продуманный дизайн до мелочей для комфортного пребывания.',
        url: 'services',
        linkLabel: 'Подробнее',
        mode: ''
      },
      values: [
        {
          id: 1,
          mode: 'vertical',
          name: 'Завтраки в постель',
          image: '/images/feature/feature-preview-1.jpg'
        },
        {
          id: 2,
          mode: 'horizontal',
          name: '20% скидка в ресторанах Ginza Project ',
          image: '/images/feature/feature-preview-2.jpg'
        },
        {
          id: 3,
          mode: 'vertical',
          name: 'Сервис 24/7',
          image: '/images/feature/feature-preview-3.jpg'
        },
        {
          id: 4,
          mode: 'vertical',
          name: 'Расположение в центре города',
          image: '/images/feature/feature-preview-4.jpg'
        },
        {
          id: 5,
          mode: 'horizontal',
          name: 'Стильные интерьеры',
          image: '/images/feature/feature-preview-5.jpg'
        },
        {
          id: 6,
          mode: 'horizontal',
          name: 'Персональный вход',
          image: '/images/feature/feature-preview-6.jpg'
        },
        {
          id: 7,
          mode: 'vertical',
          name: 'VIP-экскурсии по городу',
          image: '/images/feature/feature-preview-7.jpg'
        }
      ]
    },
    {
      name: 'Housing'
    },
    {
      name: 'banner_sale',
      properties: {
        description: 'Отель, мини-отель или апартаменты, какой бы формат размещения от Ginza Hotels & Apartments Вы не выбрали – Вас ждет сервис премиум класса. Забронировать стол в ресторане, заказать доставку еды или свежих цветов, организовать билеты в театр, сдать вещи в химчистку, быстро убрать апартаменты - все бытовые вопросы решаются моментально после звонка персональному менеджеру.',
        url: '/',
        linkLabel: 'Ещё'
      },
      values: [
        {
          description: 'при бронировании апартаментов для всех держателей карт Ginza Team Silver и Ginza Team Gold.',
          sale: '20%',
          label: 'скидка',
          logo: '/images/logo-hotels.svg',
          image: '/images/sale/sale-preview-1.jpg'
        },
        {
          description: 'на меню ресторанов <br/>Ginza Project',
          sale: '20%',
          logo: '/images/logo-rest.svg',
          image: '/images/sale/sale-preview-2.jpg'
        }
      ]
    },
    {
      name: 'banner_text',
      properties: {
        title: 'Индивидуальный сервиc',
        description: 'Мы очень любим своих гостей и делаем все, чтобы они провели свой отдых в Санкт-Петербурге незабываемо. Для лучшего обслуживания мы подготовили для Вас премиальный сервис, услуги которого постоянно обновляются.',
        url: 'services',
        linkLabel: 'Подробнее'
      }
    },
    {
      name: 'slider_features_big',
      values: [
        {
          id: 1,
          name: 'Экскурсии и туры',
          title: 'Незабываемые экскурсии',
          description: 'Романтичная обстановка, уютные номера, приятные сюрпризы, отменное обслуживание — все это обеспечит уединенный и незабываемый отдых в Ginza Hotels & Apartments.',
          url: 'services/tours',
          linkLabel: 'Посмотреть',
          image: '/images/feature/feature-big.jpg'
        },
        {
          id: 2,
          name: 'Свадебные пакеты',
          title: 'Незабываемые моменты',
          description: 'Романтичная обстановка, уютные номера, приятные сюрпризы.',
          url: 'services/weddings',
          linkLabel: 'Посмотреть',
          image: '/images/main/main-2.jpg'
        },
        {
          id: 3,
          name: 'Beauty concierge',
          title: 'Незабываемый Beauty concierge',
          description: 'Все это обеспечит уединенный и незабываемый отдых в Ginza Hotels & Apartments.',
          url: 'services/beauty',
          linkLabel: 'Посмотреть',
          image: '/images/main/main-3.jpg'
        }
      ]
    },
    {
      name: 'slider_news',
      properties: {
        title: 'Блог',
        url: 'blog',
        linkLabel: 'Подробнее'
      },
      values: [
        {
          id: 1,
          title: 'Заголовок блога',
          image: '/images/blog/blog-preview-1.jpg'
        },
        {
          id: 2,
          title: 'Топ 10 мест для посещения',
          image: '/images/blog/blog-preview-2.jpg'
        },
        {
          id: 3,
          title: 'Заголовок новости',
          image: '/images/blog/blog-preview-3.jpg'
        },
        {
          id: 4,
          title: 'Заголовок блога',
          image: '/images/blog/blog-preview-4.jpg'
        },
        {
          id: 5,
          title: 'Топ 10 мест для посещения',
          image: '/images/blog/blog-preview-5.jpg'
        },
        {
          id: 6,
          title: 'Персональный вход',
          image: '/images/blog/blog-preview-4.jpg'
        },
        {
          id: 7,
          title: 'VIP-экскурсии по городу',
          image: '/images/blog/blog-preview-3.jpg'
        }
      ]
    },
    {
      name: 'banner_love',
      properties: {
        title: 'Сделано с любовью!'
      }
    }
  ]
}

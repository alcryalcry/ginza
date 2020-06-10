module.exports = {
  title: 'Свадебные предложения',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'sub_header',
      properties: {
      },
      values: [
        {
          linkLabel: 'Связаться с менеджером',
          isPopupLink: true
        }
      ],
      popup: {
        type: 'popupManager',
        content: {
          title: 'Связаться с менеджером',
          resultTitle: 'Сообщение отправлено.',
          resultDescription: 'Через несколько минут с Вами свяжется менеджер.',
          image: '/images/popup-manager.jpg',
          tag: 'ИЛИ ПОЗВОНИТЕ: <a href="tel:88005003300">8-800-500-33-00</a>',
          disclaimer: '*Нажимая “отправить” Вы даете согласие <br/>на <a href="/privacy" target="_blank">обработку персональных данных</a>',
          fields: [
            {
              type: 'text',
              label: 'Имя',
              name: 'userName',
              validate: [
                {
                  rule: 'required'
                }
              ]
            },
            {
              type: 'phone',
              label: 'Телефон',
              name: 'userPhone',
              validate: [
                {
                  rule: 'phone'
                }
              ]
            },
            {
              type: 'text',
              label: 'Сообщение (необязательно)',
              name: 'userMessage',
              validate: []
            }
          ]
        }
      }
    },
    {
      name: 'services_head',
      properties: {
        tag: 'Сервис',
        title: 'Свадебные предложения',
        description: 'Совершенный свадебный день и запоминающийся вечер перед главным событием в апартаментах от Ginza Project. Если Вы в поиске идеальной локации для самого важного события, Вас ждут в Ginza Hotels & Apartments - дизайнерских апартаментах в центре города с высоким уровнем сервиса и особыми предложениями для будущих молодоженов. Именно детали создают настроение праздника. В Ginza Hotels & Apartments продумано все до мелочей, чтобы Вы наслаждались самим событием.',
        image: '/images/feature/feature-big.jpg'
      }
    },
    {
      name: 'toggle_list',
      properties: {
        mode: 'section',
        linkLabel: 'Связаться с менеджером'
      },
      popup: {
        type: 'popupManager',
        content: {
          title: 'Связаться с менеджером',
          resultTitle: 'Сообщение отправлено.',
          resultDescription: 'Через несколько минут с Вами свяжется менеджер.',
          image: '/images/popup-manager.jpg',
          tag: 'ИЛИ ПОЗВОНИТЕ: <a href="tel:88005003300">8-800-500-33-00</a>',
          disclaimer: '*Нажимая “отправить” Вы даете согласие <br/>на <a href="/privacy" target="_blank">обработку персональных данных</a>',
          fields: [
            {
              type: 'text',
              label: 'Имя',
              name: 'userName',
              validate: [
                {
                  rule: 'required'
                }
              ]
            },
            {
              type: 'phone',
              label: 'Телефон',
              name: 'userPhone',
              validate: [
                {
                  rule: 'phone'
                }
              ]
            },
            {
              type: 'text',
              label: 'Сообщение (необязательно)',
              name: 'userMessage',
              validate: []
            }
          ]
        }
      },
      values: [
        {
          id: 1,
          title: 'Heavenly Suite',
          menu: {
            list: [
              'Игристое',
              'Десерты',
              'Фруктовая корзина',
              'Букет цветов',
              'Лепестки роз',
              'Романтические свечи'
            ],
            sum: 'Стоимость: 9 900 руб.'
          }
        },
        {
          id: 2,
          title: 'Sweet Home',
          menu: {
            list: [
              'Лепестки роз',
              'Романтические свечи'
            ],
            sum: 'Стоимость: 500 руб.'
          }
        },
        {
          id: 3,
          title: 'Wedding Suite',
          menu: {
            list: [
              'Десерты',
              'Фруктовая корзина',
              'Букет цветов',
              'Лепестки роз'
            ],
            sum: 'Стоимость: 12 900 руб.'
          }
        }
      ]
    },
    {
      name: 'slider_features',
      properties: {
        mode: 'section--min',
        modeSlider: 'section--min',
        hasTabs: true
      },
      values: [
        {
          id: 1,
          name: 'Dom 16',
          linkLabel: 'Посмотреть',
          url: '/',
          slides: [
            {
              id: 1,
              mode: 'vertical',
              image: '/images/feature/feature-preview-3-1.jpg'
            },
            {
              id: 2,
              mode: 'horizontal',
              image: '/images/feature/feature-preview-3-2.jpg'
            },
            {
              id: 3,
              mode: 'vertical',
              image: '/images/feature/feature-preview-3-3.jpg'
            }
          ]
        },
        {
          id: 2,
          name: 'Karavannaya 17',
          linkLabel: 'Посмотреть',
          url: '/',
          slides: [
            {
              id: 3,
              mode: 'vertical',
              image: '/images/feature/feature-preview-3-3.jpg'
            },
            {
              id: 1,
              mode: 'vertical',
              image: '/images/feature/feature-preview-3-1.jpg'
            },
            {
              id: 2,
              mode: 'horizontal',
              image: '/images/feature/feature-preview-3-2.jpg'
            }
          ]
        },
        {
          id: 3,
          name: 'Moskovskiy 191',
          linkLabel: 'Посмотреть',
          url: '/',
          slides: [
            {
              id: 2,
              mode: 'horizontal',
              image: '/images/feature/feature-preview-3-2.jpg'
            },
            {
              id: 3,
              mode: 'vertical',
              image: '/images/feature/feature-preview-3-3.jpg'
            },
            {
              id: 1,
              mode: 'vertical',
              image: '/images/feature/feature-preview-3-1.jpg'
            }

          ]
        }
      ]
    },
    {
      name: 'see_also',
      properties: {
        url: 'individual',
        linkLabel: 'Индивидуальный сервис'
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
          url: '/special',
          linkLabel: 'Спецпредложения'
        },
        {
          url: null,
          linkLabel: 'Свадебные предложения'
        }
      ]
    }
  ]
}

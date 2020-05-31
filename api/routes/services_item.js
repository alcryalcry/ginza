module.exports = {
  title: 'Сервисы One',
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
        title: 'Экскурсии и туры',
        description: 'Познакомиться с Петербургом поближе стоит с экскурсионными программами от Ginza Hotels & Apartments - классические и неформальные маршруты, профессиональные гиды, музеи без очередей, автомобили S-класса. Если Вы давно мечтали о захватывающей обзорной прогулке на вертолете, катере или карете - они также доступны к заказу. Ваш персональный менеджер позаботится обо всем.',
        image: '/images/feature/feature-big.jpg'
      },
      values: [
        {
          id: 1,
          mode: 'vertical',
          image: '/images/restaurant/restaurant-preview-1.jpg'
        },
        {
          id: 2,
          mode: 'horizontal',
          image: '/images/restaurant/restaurant-preview-2.jpg'
        },
        {
          id: 3,
          mode: 'vertical',
          image: '/images/restaurant/restaurant-preview-3.jpg'
        }
      ]
    },
    {
      name: 'grid_list',
      values: [
        {
          id: 1,
          mode: 'size-half',
          title: 'Эрмитаж',
          image: '/images/gallery/gallery-1-4.jpg',
          url: 'blog/hermitage',
          linkLabel: 'Подробнее'
        },
        {
          id: 2,
          mode: 'size-half',
          title: 'Эрмитаж',
          image: '/images/gallery/gallery-1-5.jpg',
          url: 'blog/hermitage',
          linkLabel: 'Подробнее'
        },
        {
          id: 3,
          mode: 'size-full',
          title: 'Эрмитаж',
          image: '/images/gallery/gallery-1-1.jpg',
          url: 'blog/hermitage',
          linkLabel: 'Подробнее'
        }
      ]
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
        }
      ]
    },
    {
      name: 'toggle_list',
      properties: {
        mode: 'section'
      },
      values: [
        {
          id: 1,
          title: 'Для девушек',
          tables: [
            {
              id: 1,
              columns: [
                {
                  id: 1,
                  mode: '',
                  label: ['Стрижка']
                },
                {
                  id: 2,
                  mode: '',
                  label: ['Pro Мастер']
                },
                {
                  id: 3,
                  mode: '',
                  label: ['Top Мастер']
                }
              ],
              rows: [
                [
                  {
                    columnId: 1,
                    mode: 'tag',
                    label: ''
                  },
                  {
                    columnId: 2,
                    mode: 'tag',
                    label: ['Короткие <br/>волосы', 'Длинные <br/>волосы']
                  },
                  {
                    columnId: 3,
                    mode: 'tag',
                    label: ['Короткие <br/>волосы', 'Длинные <br/>волосы']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Укладка']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['2 000', '3 000']
                  },
                  {
                    columnId: 3,
                    mode: 'bold',
                    label: ['3 000', '4 000']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Укладка De Luxe <br/>(лечение и уход)']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 000', '4 000']
                  },
                  {
                    columnId: 3,
                    mode: 'bold',
                    label: ['4 000', '5 000']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Укладка вечерняя <br/>(прическа)']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 500', '5 000']
                  },
                  {
                    columnId: 3,
                    mode: 'bold',
                    label: ['4 000', '6 000']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Стрижка с укладкой']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 000', '4 000']
                  },
                  {
                    columnId: 3,
                    mode: 'bold',
                    label: ['4 000', '5 000']
                  }
                ]
              ]
            },
            {
              id: 2,
              columns: [
                {
                  id: 1,
                  mode: '',
                  label: ['Макияж']
                },
                {
                  id: 2,
                  mode: '',
                  label: ['']
                },
                {
                  id: 3,
                  mode: '',
                  label: ['']
                }
              ],
              rows: [
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Экспресс - макияж']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['2 000', '']
                  },
                  {
                    columnId: 3,
                    mode: 'bold',
                    label: []
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Макияж вечерний']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 000', '']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Окрашивание бровей <br/>(доп. услуги с макияжем)']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 500', '']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Коррекция формы бровей']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 000', '']
                  }
                ]
              ]
            }
          ],
          descriptionTables: 'Вы сможете пригласить мастера в номер, позвонив по номеру: <a href="tel:+7 (921) 938-38-80">+7 (921) 938-38-80</a>'
        },
        {
          id: 2,
          title: 'Для мужчин',
          tables: [
            {
              id: 1,
              columns: [
                {
                  id: 1,
                  mode: '',
                  label: ['Стрижка']
                },
                {
                  id: 2,
                  mode: '',
                  label: ['Pro Мастер']
                },
                {
                  id: 3,
                  mode: '',
                  label: ['Top Мастер']
                }
              ],
              rows: [
                [
                  {
                    columnId: 1,
                    mode: 'tag',
                    label: ''
                  },
                  {
                    columnId: 2,
                    mode: 'tag',
                    label: ['Короткие <br/>волосы', 'Длинные <br/>волосы']
                  },
                  {
                    columnId: 3,
                    mode: 'tag',
                    label: ['Короткие <br/>волосы', 'Длинные <br/>волосы']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Укладка']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['2 000', '3 000']
                  },
                  {
                    columnId: 3,
                    mode: 'bold',
                    label: ['3 000', '4 000']
                  }
                ]
              ]
            }
          ],
          descriptionTables: 'Вы сможете пригласить мастера в номер, позвонив по номеру: <a href="tel:+7 (921) 938-38-80">+7 (921) 938-38-80</a>'
        },
        {
          id: 3,
          title: 'Для детей',
          tables: [
            {
              id: 1,
              columns: [
                {
                  id: 1,
                  mode: '',
                  label: ['Стрижка']
                },
                {
                  id: 2,
                  mode: '',
                  label: ['Pro Мастер']
                }
              ],
              rows: [
                [
                  {
                    columnId: 1,
                    mode: 'tag',
                    label: ''
                  },
                  {
                    columnId: 2,
                    mode: 'tag',
                    label: ['Короткие <br/>волосы', '']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Экспресс - макияж']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['2 000', '']
                  },
                  {
                    columnId: 3,
                    mode: 'bold',
                    label: []
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Макияж вечерний']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 000', '']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Окрашивание бровей <br/>(доп. услуги с макияжем)']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 500', '']
                  }
                ],
                [
                  {
                    columnId: 1,
                    mode: '',
                    label: ['Коррекция формы бровей']
                  },
                  {
                    columnId: 2,
                    mode: 'bold',
                    label: ['3 000', '']
                  }
                ]
              ]
            }
          ],
          descriptionTables: 'Вы сможете пригласить мастера в номер, позвонив по номеру: <a href="tel:+7 (921) 938-38-80">+7 (921) 938-38-80</a>'
        }
      ]
    },
    {
      name: 'banner_text',
      properties: {
        tag: 'ИЛИ ПОЗВОНИТЕ: <a href="tel:88005003300">8-800-500-33-00</a>',
        linkLabel: 'Отправить сообщение',
        isPopupContacts: true
      },
      description: 'Наш менеджер ответит на все Ваши вопросы (какой тур выбрать или куда сходить), а также поможет в организации собственного тура, если у Вас есть идеи',
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
        }
      ]
    },
    {
      name: 'see_also',
      properties: {
        url: 'beauty',
        linkLabel: 'Beauty Concierge'
      }
    }
  ]
}

module.exports = {
  title: 'Сервисы One',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'sub_header',
      properties: {
        type: 'anchors'
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
        title: 'Beauty Concierge',
        description: 'Мы знаем, как это важно – выглядеть безупречно. Для гостей действует специальное меню Beauty Concierge – в котором Вы найдете то, что Вам по душе. Специалисты премиального салона готовы провести выбранные Beauty-процедуры прямо в номере. '
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
      name: 'see_also',
      properties: {
        url: 'chisto',
        linkLabel: 'Прачечная и химчистка'
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
          url: '/services',
          linkLabel: 'Сервисы'
        },
        {
          url: null,
          linkLabel: 'Beauty Concierge'
        }
      ]
    }
  ]
}

module.exports = {
  title: 'Событие One',
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

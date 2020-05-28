module.exports = {
  title: 'Контакты',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'contacts_form',
      properties: {
        social: [
          {
            name: 'instagram',
            url: '#'
          },
          {
            name: 'facebook',
            url: '#'
          },
          {
            name: 'tripadvisor',
            url: '#'
          }
        ],
        contacts: [
          {
            title: 'Телефон',
            href: 'tel:88002012173',
            label: '8 800 201-21-73'
          },
          {
            title: 'E-mail',
            href: 'mailto:info@ginzahotels.ru',
            label: 'info@ginzahotels.ru'
          }
        ],
        resultTitle: 'Сообщение отправлено.',
        resultDescription: 'Через несколько минут с Вами свяжется менеджер.',
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
            type: 'email',
            label: 'E-mail',
            name: 'userEmail',
            validate: [
              {
                rule: 'required'
              },
              {
                rule: 'email'
              }
            ]
          },
          {
            type: 'select',
            label: 'Тема обращения',
            name: 'messageSubject',
            options: [
              {
                id: 'subject 1',
                label: 'Тема 1'
              },
              {
                id: 'subject 2',
                label: 'Тема 2'
              },
              {
                id: 'subject 3',
                label: 'Тема 3'
              }
            ],
            validate: [
              {
                rule: 'required'
              }
            ]
          }
        ]
      }
    }
  ]
}

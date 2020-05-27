module.exports = {
  title: 'Инвесторам',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'investors_form',
      description: 'Станьте инвестором в федеральную сеть отелей и апартаментов совместно с Ginza Hotels & Apartments и получайте доход от инвестиций. Оставьте свои контакты, чтобы получить подробную презентацию.',
      properties: {
        url: '/',
        resultTitle: 'Сообщение отправлено.',
        resultDescription: 'Через несколько минут с Вами свяжется менеджер.',
        image: '/images/investors.jpg',
        linkLabel: 'О проекте',
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
          }
        ]
      }
    }
  ]
}

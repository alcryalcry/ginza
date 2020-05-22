module.exports = {
  title: 'Сервисы One',
  description: 'Описание страницы',
  keywords: '',
  components: [
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
          image: '/images/restaurant/restaurant-full.jpg',
          tag: 'ИЛИ ПОЗВОНИТЕ: <a href="tel:88005003300">8-800-500-33-00</a>',
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
      name: 'see_also',
      properties: {
        url: 'services/beauty',
        linkLabel: 'Beauty Concierge'
      }
    }
  ]
}

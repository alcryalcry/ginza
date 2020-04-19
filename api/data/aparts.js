module.exports = {
  title: 'Жилье',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'sub_header',
      type: 'anchors',
      values: [
        {
          linkLabel: 'Апартаменты',
          url: 'apartments'
        },
        {
          linkLabel: 'Отели',
          url: 'hotels'
        }
      ]
    },
    {
      name: 'housing_page',
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
              coords: [59.432211, 30.906072],
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
            },
            {
              slug: 'moskovskiy_piter',
              city: 'Санкт-Петербург',
              title: 'Moskovskiy Piter',
              images: [
                'https://picsum.photos/id/58/300/400',
                'https://picsum.photos/id/57/300/400',
                'https://picsum.photos/id/580/300/400'
              ],
              coords: [59.042211, 30.416072],
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
            },
            {
              slug: 'moskovskiy192',
              city: 'Санкт-Петербург',
              title: 'Moskovskiy 192',
              images: [
                'https://picsum.photos/id/58/300/400',
                'https://picsum.photos/id/57/300/400',
                'https://picsum.photos/id/580/300/400'
              ],
              coords: [59.252211, 30.906072],
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
            },
            {
              slug: 'moskovskiy193',
              city: 'Санкт-Петербург',
              title: 'Moskovskiy 193',
              images: [
                'https://picsum.photos/id/58/300/400',
                'https://picsum.photos/id/57/300/400',
                'https://picsum.photos/id/580/300/400'
              ],
              coords: [59.972211, 30.686072],
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
        }
      ]
    }
  ]
}

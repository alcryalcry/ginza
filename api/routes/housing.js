module.exports = {
  title: 'Stays',
  description: 'Описание страницы',
  keywords: '',
  components: [
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
                '/images/apartment/apartment-preview-1.jpg',
                '/images/apartment/apartment-preview-2.jpg',
                '/images/apartment/apartment-preview-3.jpg'
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
                '/images/apartment/apartment-preview-2.jpg',
                '/images/apartment/apartment-preview-1.jpg',
                '/images/apartment/apartment-preview-3.jpg'
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
                '/images/apartment/apartment-preview-3.jpg',
                '/images/apartment/apartment-preview-2.jpg',
                '/images/apartment/apartment-preview-1.jpg'
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
            }
          ]
        }
      ]
    }
  ]
}

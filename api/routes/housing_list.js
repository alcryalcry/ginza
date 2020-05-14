module.exports = function (params, res) {
  const {
    city = ''
  } = params
  const cities = [
    {
      id: 'spb',
      name: 'Санкт-Петербург'
    },
    {
      id: 'rostov',
      name: 'Ростов на Дону'
    },
    {
      id: 'tbilisi',
      name: 'Тбилиси'
    }
  ]
  const currentCity = (cities.find(item => item.id === city) || {})

  const list = [
    {
      slug: 'rubinsteina12',
      type: 'apartments',
      cityId: currentCity.id,
      city: currentCity.name,
      title: 'Rubinsteina 12',
      images: [
        '/images/apartment/apartment-preview-1.jpg',
        '/images/apartment/apartment-preview-2.jpg',
        '/images/apartment/apartment-preview-3.jpg'
      ],
      coords: currentCity.id === 'spb' ? [59.932211, 30.346072] : [0, 0],
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
      type: 'apartments',
      cityId: currentCity.id,
      city: currentCity.name,
      title: 'Karavannaya 11',
      images: [
        '/images/apartment/apartment-preview-2.jpg',
        '/images/apartment/apartment-preview-1.jpg',
        '/images/apartment/apartment-preview-3.jpg'
      ],
      coords: currentCity.id === 'spb' ? [59.032211, 30.446072] : [0, 0],
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
      type: 'apartments',
      cityId: currentCity.id,
      city: currentCity.name,
      title: 'Moskovskiy 191',
      images: [
        '/images/apartment/apartment-preview-3.jpg',
        '/images/apartment/apartment-preview-2.jpg',
        '/images/apartment/apartment-preview-1.jpg'
      ],
      coords: currentCity.id === 'spb' ? [59.232211, 30.906072] : [0, 0],
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
      slug: 'dom16',
      type: 'hotels',
      cityId: currentCity.id,
      city: currentCity.name,
      title: 'Dom 16',
      images: [
        '/images/hotel/hotel-preview-1.jpg',
        '/images/hotel/hotel-preview-2.jpg',
        '/images/hotel/hotel-preview-3.jpg'
      ],
      coords: currentCity.id === 'spb' ? [59.532211, 30.99072] : [0, 0],
      params: [
        {
          type: 'text',
          value: '1 номер'
        }
      ]
    },
    {
      slug: 'kvartira14',
      type: 'hotels',
      cityId: currentCity.id,
      city: currentCity.name,
      title: 'Kvartira 14',
      images: [
        '/images/hotel/hotel-preview-2.jpg',
        '/images/hotel/hotel-preview-1.jpg',
        '/images/hotel/hotel-preview-3.jpg'
      ],
      coords: currentCity.id === 'spb' ? [59.552211, 30.096072] : [0, 0],
      params: [
        {
          type: 'text',
          value: '3 номера'
        }
      ]
    },
    {
      slug: 'khedi',
      type: 'hotels',
      cityId: currentCity.id,
      city: currentCity.name,
      title: 'Khedi',
      images: [
        '/images/hotel/hotel-preview-3.jpg',
        '/images/hotel/hotel-preview-2.jpg',
        '/images/hotel/hotel-preview-1.jpg'
      ],
      coords: currentCity.id === 'spb' ? [59.792211, 30.556072] : [0, 0],
      params: [
        {
          type: 'text',
          value: '60 номеров'
        }
      ]
    }
  ]
  res.jsonp({
    list
  })
}

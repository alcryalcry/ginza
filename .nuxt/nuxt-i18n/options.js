export const vueI18n = {
  "fallbackLocale":"ru",
  "messages":{
    "ru":{
      CATEGORY: {
        Apartments: "Апартаменты",
        Standart: "Отель",
        Business: "Отель"
      },
      "menuList":[
        {
          "label":"О нас",
          "url":"/about"
        },
        {
          "label":"Апартаменты ",
          "url":"/apartments"
        },
        {
          "label":"Отели",
          "url":"/hotels"
        },
        {
          "label":"Сервис",
          "url":"/services"
        },
        {
          "label":"Спецпредложения",
          "url":"/special"
        },
        {
          "label":"Культура & События",
          "url":"/posts"
        },
        {
          "label":"Инвесторам",
          "url":"/investors"
        },
        {
          "label":"Контакты",
          "url":"/contacts"
        }
      ],
      "housingTypes":[
        {
          "id":"apartments",
          "name":"Апартаменты"
        },
        {
          "id":"hotels",
          "name":"Отели"
        }
      ],
      "services":{
        "linkLabel":"Подробнее"
      },
      "fixedActions":{
        "travelline":{
          "values":[
            {
              "id":"city",
              "type":"cities",
              "label":"Выберите город"
            },
            {
              "id":"date",
              "type":"popup",
              "label":"Даты",
              "popup":{
                "type":"popupBooking"
              }
            },
            {
              "id":"count",
              "type":"popup",
              "label":"Гостей",
              "popup":{
                "type":"popupBooking"
              }
            },
            {
              "id":"booking",
              "type":"popup",
              "isMobile":true,
              "label":"Бронировать",
              "arrow":true,
              "popup":{
                "type":"popupBooking"
              }
            }
          ]
        },
        "restaurants":{
          "values":[
            {
              "href":"",
              "id":"menu",
              "isDownload":true,
              "label":"Меню ресторана",
              "type":"link"
            },
            {
              "id":"booking",
              "isMobile":true,
              "label":"Забронировать столик",
              "type":"popup",
              "popup":{
                "type":"popupBooking"
              }
            }
          ]
        }
      },
      "contacts":{
        "social":[
          {
            "field":"phone",
            "title":"Телефон",
            "prefix":"tel:"
          },
          {
            "field":"email",
            "title":"E-mail",
            "prefix":"mailto:"
          }
        ],
        "submit":"Отправить*",
        "investors":"Инвесторам",
        "resultTitle":"Сообщение отправлено.",
        "resultDescription":"Через несколько минут с Вами свяжется менеджер.",
        "disclaimer":"*Нажимая “отправить” Вы даете согласие <br/>на <a href=\"/privacy\" target=\"_blank\">обработку персональных данных</a>",
        "fields":[
          {
            "type":"text",
            "label":"Имя",
            "name":"clientName",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"phone",
            "label":"Телефон",
            "name":"clientPhone",
            "validate":[
              {
                "rule":"phone"
              }
            ]
          },
          {
            "type":"email",
            "label":"E-mail",
            "name":"clientEmail",
            "validate":[
              {
                "rule":"required"
              },
              {
                "rule":"email"
              }
            ]
          },
          {
            "type":"text",
            "label":"Тема обращения",
            "name":"request",
            "validate":[
              {
                "rule":"required"
              }
            ]
          }
        ]
      },
      "filters":{
        "all":"Все"
      },
      "error":{
        "text":"Страница, которую Вы ищете недоступна."
      },
      "booking":{
        "title":"Бронирование",
        "btnLabelTravelLine":"Подобрать",
        "btnLabel":"Забронировать",
        "resultTitle":"Вы забронировали столик",
        "resultDescription":"Через несколько минут с Вами свяжется менеджер для уточнения деталей.",
        "fields":[
          {
            "type":"text",
            "label":"Имя",
            "name":"clientName",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"phone",
            "label":"Телефон",
            "name":"clientPhone",
            "validate":[
              {
                "rule":"phone"
              }
            ]
          },
          {
            "type":"counter",
            "label":"Гостей",
            "name":"guests",
            "value":2,
            "minValue":1,
            "validate":[
              {
                "rule":"counter"
              }
            ]
          },
          {
            "type":"date",
            "label":"Дата",
            "name":"date",
            "validate":[
              {
                "rule":"required"
              }
            ]
          }
        ]
      },
      "restaurants":{
        "menu":"Меню ресторана"
      },
      "hotels":{
        "anchorLabel":"Посмотреть номера",
        "filters":[
          {
            "id":"",
            "name":"Все номера"
          },
          {
            "id":"double",
            "name":"Двухместные"
          },
          {
            "id":"triple",
            "name":"Трехместные"
          },
          {
            "id":"more_3",
            "name":"Более"
          }
        ]
      },
      "seeAlso":{
        "label":"Посмотрите также"
      },
      "header":{
        "menu_name":"Меню",
        "back":"Назад",
        "allRooms":"Все комнаты"
      },
      "showMore":{
        "show":"Показать еще",
        "hide":"Свернуть"
      },
      "showMoreDescription":{
        "show":"Подробнее",
        "hide":"Свернуть"
      },
      "apartment":{
        "showVideo":"Посмотреть видео",
        "excursion":"Экскурсия по апартаментам"
      },
      "housing":{
        "all":"Все",
        "listLabel":"Списком",
        "mapLabel":"На карте",
        "apartments":"Все апартаменты",
        "hotels":"Все отели"
      },
      "slider":{
        "prev":"Назад",
        "next":"Вперед",
        "show":"Посмотреть"
      },
      "footer":{
        "privacyUrl":"/privacy",
        "privacy":"Политика конфиденциальности"
      },
      "popup":{
        "manager":"Отправить сообщение",
        "submit":"Отправить"
      },
      "blog":{
        "linkLabel":"Читать"
      },
      "subheader":{
        "services":{
          "type":"anchors",
          "popup":{
            "type":"popupManager"
          },
          "values":[
            {
              "linkLabel":"Связаться с менеджером",
              "isPopupLink":true
            }
          ]
        }
      },
      "travelline":{
        "resultTitle":"Вы забронировали столик",
        "resultDescription":"Через несколько минут с Вами свяжется менеджер для уточнения деталей.",
        "fields":[
          {
            "type":"cities",
            "label":"Выберите город",
            "name":"cities",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"counter",
            "label":"Взрослых",
            "name":"guests",
            "minValue":1,
            "value":2,
            "mode":"half",
            "validate":[
              {
                "rule":"counter"
              }
            ]
          },
          {
            "type":"counter",
            "label":"Детей",
            "name":"child",
            "minValue":0,
            "value":0,
            "mode":"half",
            "validate":[
              {
                "rule":"counter"
              }
            ]
          },
          {
            "type":"datesRange",
            "label":"Даты",
            "name":"datesRange",
            "validate":[
              {
                "rule":"required"
              }
            ]
          }
        ]
      },
      "manager":{
        "title":"Связаться с менеджером",
        "resultTitle":"Сообщение отправлено.",
        "resultDescription":"Через несколько минут с Вами свяжется менеджер.",
        "tag":"ИЛИ ПОЗВОНИТЕ:",
        "disclaimer":"*Нажимая “отправить” Вы даете согласие <br/>на <a href='/privacy' target='_blank'>обработку персональных данных</a>",
        "fields":[
          {
            "type":"text",
            "label":"Имя",
            "name":"clientName",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"phone",
            "label":"Телефон",
            "name":"clientPhone",
            "validate":[
              {
                "rule":"phone"
              }
            ]
          },
          {
            "type":"text",
            "label":"Сообщение (необязательно)",
            "name":"request",
            "validate":[

            ]
          }
        ]
      },
      "investors":{
        "description":"Станьте инвестором в федеральную сеть отелей и апартаментов совместно с Ginza Hotels & Apartments и получайте доход от инвестиций. Оставьте свои контакты, чтобы получить подробную презентацию.",
        "url":"/about",
        "submit":"Получить презентацию*",
        "resultTitle":"Сообщение отправлено.",
        "resultDescription":"Через несколько минут с Вами свяжется менеджер.",
        "linkLabel":"О проекте",
        "disclaimer":"*Нажимая “отправить” Вы даете согласие <br/>на <a href=\"/privacy\" target=\"_blank\">обработку персональных данных</a>",
        "fields":[
          {
            "type":"text",
            "label":"Имя",
            "name":"clientName",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"phone",
            "label":"Телефон",
            "name":"clientPhone",
            "validate":[
              {
                "rule":"phone"
              }
            ]
          },
          {
            "type":"email",
            "label":"E-mail",
            "name":"clientEmail",
            "validate":[
              {
                "rule":"required"
              },
              {
                "rule":"email"
              }
            ]
          }
        ]
      }
    },
    "en":{
      CATEGORY: {
        Apartments: "Apartments",
        Standart: "Hotel",
        Business: "Hotel"
      },
      "menuList":[
        {
          "label":"About",
          "url":"/about"
        },
        {
          "label":"Apartments ",
          "url":"/apartments"
        },
        {
          "label":"Hotels",
          "url":"/hotels"
        },
        {
          "label":"Services",
          "url":"/services"
        },
        {
          "label":"Special",
          "url":"/special"
        },
        {
          "label":"Culture & Events",
          "url":"/posts"
        },
        {
          "label":"Investors",
          "url":"/investors"
        },
        {
          "label":"Contacts",
          "url":"/contacts"
        }
      ],
      "housingTypes":[
        {
          "id":"apartments",
          "name":"Apartments"
        },
        {
          "id":"hotels",
          "name":"Hotels"
        }
      ],
      "services":{
        "linkLabel":"Read more"
      },
      "fixedActions":{
        "travelline":{
          "values":[
            {
              "id":"city",
              "type":"cities",
              "label":"Select a city"
            },
            {
              "id":"date",
              "type":"popup",
              "label":"Dates",
              "popup":{
                "type":"popupBooking"
              }
            },
            {
              "id":"count",
              "type":"popup",
              "label":"Guests",
              "popup":{
                "type":"popupBooking"
              }
            },
            {
              "id":"booking",
              "type":"popup",
              "isMobile":true,
              "label":"Booking",
              "arrow":true,
              "popup":{
                "type":"popupBooking"
              }
            }
          ]
        },
        "restaurants":{
          "values":[
            {
              "href":"",
              "id":"menu",
              "isDownload":true,
              "label":"Restaurant menu",
              "type":"link"
            },
            {
              "id":"booking",
              "isMobile":true,
              "label":"Reserve a table",
              "type":"popup",
              "popup":{
                "type":"popupBooking"
              }
            }
          ]
        }
      },
      "contacts":{
        "social":[
          {
            "field":"phone",
            "title":"Phone",
            "prefix":"tel:"
          },
          {
            "field":"email",
            "title":"E-mail",
            "prefix":"mailto:"
          }
        ],
        "submit":"Submit*",
        "investors":"Investors",
        "resultTitle":"Message sent.",
        "resultDescription":"The manager will contact you in a few minutes.",
        "disclaimer":"*By clicking “send” you consent <br/>to <a href=\"/privacy\" target=\"_blank\">the processing of personal data</a>",
        "fields":[
          {
            "type":"text",
            "label":"Name",
            "name":"clientName",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"phone",
            "label":"Phone",
            "name":"clientPhone",
            "validate":[
              {
                "rule":"phone"
              }
            ]
          },
          {
            "type":"email",
            "label":"E-mail",
            "name":"clientEmail",
            "validate":[
              {
                "rule":"required"
              },
              {
                "rule":"email"
              }
            ]
          },
          {
            "type":"text",
            "label":"Subject of message",
            "name":"messageSubject",
            "validate":[
              {
                "rule":"required"
              }
            ]
          }
        ]
      },
      "filters":{
        "all":"All"
      },
      "error":{
        "text":"The page you are looking for is not available."
      },
      "booking":{
        "title":"Booking",
        "btnLabelTravelLine":"Find",
        "btnLabel":"Book now",
        "resultTitle":"You made a reservation",
        "resultDescription":"In a few minutes a manager will contact you to clarify the details.",
        "fields":[
          {
            "type":"text",
            "label":"Name",
            "name":"clientName",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"phone",
            "label":"Phone",
            "name":"clientPhone",
            "validate":[
              {
                "rule":"phone"
              }
            ]
          },
          {
            "type":"counter",
            "label":"Guests",
            "name":"guests",
            "value":2,
            "minValue":1,
            "validate":[
              {
                "rule":"counter"
              }
            ]
          },
          {
            "type":"date",
            "label":"Date",
            "name":"date",
            "validate":[
              {
                "rule":"required"
              }
            ]
          }
        ]
      },
      "restaurants":{
        "menu":"Restaurant menu"
      },
      "hotels":{
        "anchorLabel":"Show rooms",
        "filters":[
          {
            "id":"",
            "name":"All"
          },
          {
            "id":"double",
            "name":"Double"
          },
          {
            "id":"triple",
            "name":"Triple"
          },
          {
            "id":"more_3",
            "name":"More"
          }
        ]
      },
      "seeAlso":{
        "label":"See also"
      },
      "header":{
        "menu_name":"Menu",
        "back":"Back",
        "allRooms":"All rooms"
      },
      "showMore":{
        "show":"Show more",
        "hide":"Hide"
      },
      "showMoreDescription":{
        "show":"Show more",
        "hide":"Hide"
      },
      "apartment":{
        "showVideo":"Show video",
        "excursion":"Apartment Tour"
      },
      "housing":{
        "all":"All",
        "listLabel":"List",
        "mapLabel":"Map",
        "apartments":"All apartments",
        "hotels":"All hotels"
      },
      "slider":{
        "prev":"Prev",
        "next":"Next",
        "show":"Show"
      },
      "footer":{
        "privacyUrl":"/privacy",
        "privacy":"Privacy Policy"
      },
      "popup":{
        "manager":"Send message",
        "submit":"Submit"
      },
      "blog":{
        "linkLabel":"Read"
      },
      "subheader":{
        "services":{
          "type":"anchors",
          "popup":{
            "type":"popupManager"
          },
          "values":[
            {
              "linkLabel":"Contact manager",
              "isPopupLink":true
            }
          ]
        }
      },
      "travelline":{
        "resultTitle":"You made a reservation",
        "resultDescription":"The manager will contact you in a few minutes.",
        "fields":[
          {
            "type":"cities",
            "label":"Select a city",
            "name":"cities",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"counter",
            "label":"Guests",
            "name":"guests",
            "minValue":1,
            "value":2,
            "mode":"half",
            "validate":[
              {
                "rule":"counter"
              }
            ]
          },
          {
            "type":"counter",
            "label":"Child",
            "name":"child",
            "minValue":0,
            "value":0,
            "mode":"half",
            "validate":[
              {
                "rule":"counter"
              }
            ]
          },
          {
            "type":"datesRange",
            "label":"Dates",
            "name":"datesRange",
            "validate":[
              {
                "rule":"required"
              }
            ]
          }
        ]
      },
      "manager":{
        "title":"Contact manager",
        "resultTitle":"Message sent.",
        "resultDescription":"The manager will contact you in a few minutes.",
        "tag":"OR CALL:",
        "disclaimer":"*By clicking “send” you consent <br/>to <a href=\"/privacy\" target=\"_blank\">the processing of personal data</a>",
        "fields":[
          {
            "type":"text",
            "label":"Name",
            "name":"clientName",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"phone",
            "label":"Phone",
            "name":"clientPhone",
            "validate":[
              {
                "rule":"phone"
              }
            ]
          },
          {
            "type":"text",
            "label":"Message (optionally)",
            "name":"message",
            "validate":[

            ]
          }
        ]
      },
      "investors":{
        "description":"Become an investor in a federal chain of hotels and apartments with Ginza Hotels & Apartments and get a return on your investment. Leave your contacts for a detailed presentation.",
        "url":"/about",
        "submit":"Get a presentation*",
        "resultTitle":"Message sent.",
        "resultDescription":"The manager will contact you in a few minutes.",
        "linkLabel":"About project",
        "disclaimer":"*By clicking “send” you consent <br/>to <a href=\"/privacy\" target=\"_blank\">the processing of personal data</a>",
        "fields":[
          {
            "type":"text",
            "label":"Name",
            "name":"clientName",
            "validate":[
              {
                "rule":"required"
              }
            ]
          },
          {
            "type":"phone",
            "label":"Phone",
            "name":"clientPhone",
            "validate":[
              {
                "rule":"phone"
              }
            ]
          },
          {
            "type":"email",
            "label":"E-mail",
            "name":"clientEmail",
            "validate":[
              {
                "rule":"required"
              },
              {
                "rule":"email"
              }
            ]
          }
        ]
      }
    }
  }
}
export const vueI18nLoader = false
export const locales = [{"code":"en","name":"En"},{"code":"ru","name":"Ru"}]
export const defaultLocale = 'ru'
export const routesNameSeparator = '___'
export const defaultLocaleRouteNameSuffix = 'default'
export const strategy = 'prefix_except_default'
export const lazy = false
export const langDir = null
export const rootRedirect = null
export const detectBrowserLanguage = false
export const differentDomains = false
export const seo = false
export const baseUrl = ''
export const vuex = {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true}
export const parsePages = true
export const pages = {}
export const encodePaths = true
export const beforeLanguageSwitch = () => null
export const onLanguageSwitched = () => null
export const MODULE_NAME = 'nuxt-i18n'
export const LOCALE_CODE_KEY = 'code'
export const LOCALE_ISO_KEY = 'iso'
export const LOCALE_DOMAIN_KEY = 'domain'
export const LOCALE_FILE_KEY = 'file'
export const STRATEGIES = {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"}
export const COMPONENT_OPTIONS_KEY = 'nuxtI18n'
export const localeCodes = ["en","ru"]

<template>
  <!-- TODO: подумать как получить данные через slug (разные pageId для разных локалей ) -->
  <Layout>
    <template v-slot:page-content>
      <component
        :is="item"
        v-for="(item, index) in generatedComps"
        :key="index"
        :data="components[index]"
      />
    </template>
    <template v-slot:popup>
      <Popup>
        <PopupVideo />
        <PopupBooking />
        <PopupManager />
        <PopupTravelLine />
      </Popup>
    </template>
  </Layout>
</template>

<script>
import page from '~/mixins/page'
import Subheader from '~/components/Subheader/Subheader'
// import getAsyncData from '~/plugins/getAsyncData'
// import { API_ROUTES_SERVICES_ROOT } from '~/config/constants'

export default {
  name: 'ServicesOne',
  components: {
    Subheader
  },
  mixins: [page],
  data() {
    return {
      subheaderValues: [
        {
          linkLabel: 'Связаться с менеджером',
          isPopupLink: true
        }
      ],
      components: [
        {
          'id': 1131,
          'name': 'sub_header',
          'properties': {
            'type': 'anchors'
          },
          'values': [
            {
              'linkLabel': ''
            }
          ],
          'description': null,
          'coords': null,
          'services': null,
          'rows': null,
          'popup': {
            'type': 'popupManager',
            'content': {
              'tag': '23982103812',
              'image': '/static/images/upload/service_7_popup_image_image.jpeg',
              'title': 'Какой-то заголовок',
              'resultTitle': 'Успешное обращение',
              'resultDescription': 'Вот это тоже успешно'
            }
          },
          'params': null
        },
        {
          'id': 1132,
          'name': 'services_head',
          'properties': {
            'tag': 'Отели и ывырвфлы',
            'image': '/static/images/upload/service_preview_7_image.jpeg',
            'title': 'услуга муслуга',
            'url_label': 'test',
            'description': 'Совершенный свадебный день и запоминающийся вечер перед главным событием в апартаментах от Ginza Project.\nЕсли Вы в поиске идеальной локации для самого важного события, Вас ждут в Ginza Hotels & Apartments - дизайнерских апартаментах в центре города с высоким уровнем сервиса и особыми предложениями для будущих молодоженов. Именно детали создают настроение праздника. В Ginza Hotels & Apartments продумано все до мелочей, чтобы Вы наслаждались самим событием.'
          },
          'values': [
            {
              'mode': 'vertical',
              'image': '/static/images/upload/service_7_gallery_0_image.jpeg'
            },
            {
              'mode': 'horizontal',
              'image': '/static/images/upload/service_7_gallery_1_image.jpeg'
            },
            {
              'mode': 'vertical',
              'image': '/static/images/upload/service_7_gallery_2_image.jpeg'
            }
          ],
          'description': null,
          'coords': null,
          'services': null,
          'rows': null,
          'popup': null,
          'params': null
        },
        {
          'id': 1133,
          'name': 'toggle_list',
          'properties': {
            'mode': 'section'
          },
          'values': [
            {
              'table': [
                [
                  {
                    'name': 'укладка',
                    'group': 'Стрижка',
                    'price': '2000',
                    'category': 'Pro master',
                    'sub_category': 'короткие волосы'
                  },
                  {
                    'name': 'укладка',
                    'group': 'Стрижка',
                    'price': '3000',
                    'category': 'Pro master',
                    'sub_category': 'длинные волосы'
                  },
                  {
                    'name': 'Стрижка с укладкой',
                    'group': 'Стрижка',
                    'price': '7000',
                    'category': 'Pro master',
                    'sub_category': 'длинные волосы'
                  },
                  {
                    'name': 'Экспресс-макияж',
                    'group': 'МАКИЯЖ',
                    'price': '6000',
                    'category': 'Pro master',
                    'sub_category': 'короткие волосы'
                  },
                  {
                    'name': 'Окрашивание бровей',
                    'group': 'МАКИЯЖ',
                    'price': '7000',
                    'category': 'Pro master',
                    'sub_category': 'короткие волосы'
                  }
                ]
              ],
              'title': 'Для девушек',
              'descriptionTables': 'Вы сможете пригласить мастера в номер, позвонив по номеру: +7 (921) 938-38-80'
            }
          ],
          'description': null,
          'coords': null,
          'services': null,
          'rows': null,
          'popup': null,
          'params': null
        }

      ]
    }
  }
  // async asyncData(context) {
  //   try {
  //     const {
  //       pageComponents = {}
  //     } = await getAsyncData(context,
  //       API_ROUTES_SERVICES_ROOT + '/' +
  //       context.route.params.slug
  //     )
  //     return {
  //       components: pageComponents.components,
  //     }
  //   } catch (e) {
  //     console.error('ERROR FROM page (asyncData)', e)
  //   }
  // }
}
</script>

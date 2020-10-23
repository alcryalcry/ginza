<template>
  <Layout show-travelline :footer="false">
    <template v-slot:page-content>
      <ContactsForm />
    </template>
  </Layout>
</template>

<script>
import page from '~/mixins/page'
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_CONTACTS } from '~/config/constants'
import ContactsForm from '~/components/Contacts/Form/ContactsForm'

export default {
  name: 'Contacts',
  components: {
    ContactsForm
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context, API_ROUTES_CONTACTS + '/' + context.store.state.locale)
      return {
        components: components.components,
        page: components,
        mode: components.mode || ''
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  }
}
</script>

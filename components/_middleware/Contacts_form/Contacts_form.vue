<template>
  <ContactsForm :info="model" :class="model.mode" :data-anchor="model.anchor" />
</template>

<script>
import ContactsForm from '~/components/Contacts/Form/ContactsForm'

export default {
  name: 'MiddlewareContactsForm',
  components: {
    ContactsForm
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    model() {
      return {
        mode: '',
        anchor: false,
        ...this.data,
        ...(this.data.properties || {})
      }
    }
  }
}
</script>

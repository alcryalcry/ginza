<template>
  <div>
    <div v-if="isDev" class="title--h4">
      component not found
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDev() {
      return process.env.APP_ENV === 'development'
    }
  }
}
</script>

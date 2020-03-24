<template>
  <footer class="footer" />
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-top: auto;
  height: 40rem;
  background: $gray;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #EAE5E1 0%, #D1C6BF 95.24%);
    pointer-events: none;
  }
}
</style>

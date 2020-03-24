<template>
  <div class="preloader" />
</template>

<script>
export default {
  name: 'Preloader'
}
</script>

<style lang="scss" scoped>
.preloader {
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 3.5rem);
    left: calc(50% - 3.5rem);
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-color: transparent;
    border: 3px solid transparent;
    border-top-color: $gray;
    border-left-color: $gray;
    pointer-events: none;
    -webkit-animation: 1s spin linear infinite;
    animation: 1s spin linear infinite;
  }
  .isReady & {
    &::before {
      content: none;
    }
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'atom-view_button'
}
</script>

<style scoped>
button {
  background-color: #00BE57;
  color: #FFFFFF;
  border-radius: 8px;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  border: none;
  padding: 6px 32px;
}
</style>
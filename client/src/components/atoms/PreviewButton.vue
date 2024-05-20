<template>
  <button class="preview_button_atom">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'atom-preview-button'
}
</script>

<style scoped>
.preview_button_atom {
  background-color: #00BE57;
  color: #FFFFFF;
  border-radius: 8px;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  border: none;
  padding: 6px 32px;
  cursor: pointer;
}
</style>
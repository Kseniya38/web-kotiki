<template>
  <button class="edit_btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'atom-edit-button'
}
</script>

<style>
.edit_btn{
  background-color: #7F9AE6;
  color: #FFFFFF;
  border-radius: 8px;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
  border: none;
  padding: 16px 48px;
  cursor: pointer;
}
</style>
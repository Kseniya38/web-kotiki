<template>
  <button class="del_btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'atom-del-button'
}
</script>

<style>
.del_btn {
  background-color: #E81C24CC;
  color: #FFFFFF;
  border-radius: 8px;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
  border: none;
  padding: 16px 48px;
  cursor: pointer;
}
.del_btn:hover, .del_btn:focus {
  background-color: #6504B5;
}
</style>
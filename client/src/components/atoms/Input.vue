<template>
  <div class="input_field">
    <input :placeholder="text_placeholder_input">
  </div>
</template>

<script>
export default {
  name: 'atom-input',
  props: {
    text_placeholder_input: String,
  },
}
</script>

<style>
.input_field {
  margin-top: 4px;
  margin-left:4px;
  input{
    border: 1px solid #1C1B18;
    width: 580px;
    height: 48px;
    border-radius: 8px;
    font-family: Montserrat-Medium, sans-serif;
    font-size: 16px;
  }
}


</style>
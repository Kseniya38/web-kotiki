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
  border: 1px solid #1C1B18;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  padding-left: 12px;
  align-content: center;
  background-color: white;
}
input {
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
}
</style>
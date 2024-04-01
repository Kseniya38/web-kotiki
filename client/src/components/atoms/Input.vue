<template>
  <div class="input">
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

<style >
.input {
  margin-top: 4px;
  margin-left:4px;
}
</style>
<template>
  <div>
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

</style>
<template>
  <div class="comment_textarea">
    <textarea maxlength = "566" :placeholder="text_textarea_input"></textarea>
  </div>
</template>

<script>
export default {
  name: 'atom-textarea',
  props: {
    text_textarea_input: String,
  },
  }
</script>

<style >
textarea {
  resize: none;
  overflow: auto;
}

</style>
<template>
  <div class="text"><p>{{text_p}}</p></div>
</template>

<script>
export default {
  name: 'atom-p',
  props: {
    text_p: String
  }
}
</script>

<style>
.text{
  font-weight: 500;
  font-size: 16px;
}
p {
  margin: 0;
  padding: 0;
}
</style>
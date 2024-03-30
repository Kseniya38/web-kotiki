<template>
  <a :href="url">{{text_link}}</a>
</template>

<script>
export default {
  name: 'atom-link',
  props: {
    text_link: String,
    url: String
  }
}
</script>

<style scoped>
a {
  color: #1C1B18;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 24px;
}
</style>
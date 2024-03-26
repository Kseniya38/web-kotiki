<template>
  <a :href="url">{{text}}</a>
</template>

<script>
export default {
  name: 'atom-link',
  props: {
    text: String,
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
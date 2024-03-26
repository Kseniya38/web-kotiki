<template>
  <h2>{{value}}</h2>
</template>

<script>
export default {
  name: 'atom-h2',
  props: {
    value: String
  }
}
</script>

<style scoped>
h2 {
  color: #1C1B18;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 36px;
}
</style>
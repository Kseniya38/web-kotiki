<template>
  <h1>{{value}}</h1>
</template>

<script>
export default {
  name: 'atom-h1',
  props: {
    value: String
  }
}
</script>

<style scoped>
h1 {
  color: #1C1B18;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 48px;
}
</style>
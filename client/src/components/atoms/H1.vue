<template>
  <h1>{{value_h1}}</h1>
</template>

<script>
export default {
  name: 'atom-h1',
  props: {
    value_h1: String
  }
}
</script>

<style scoped>
h1 {
  font-family: Montserrat-Bold, sans-serif;
  font-size: 48px;
}
</style>
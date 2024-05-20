<template>
  <h2>{{value_h2}}</h2>
</template>

<script>
export default {
  name: 'atom-h2',
  props: {
    value_h2: String
  }
}
</script>

<style scoped>
h2 {
  font-family: Montserrat-Bold, sans-serif;
  font-size: 36px;
  text-align: left;
}
</style>
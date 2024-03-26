<template>
  <h3>{{value}}</h3>
</template>

<script>
export default {
  name: 'atom-h3',
  props: {
    value: String
  }
}
</script>

<style scoped>
h3 {
  color: #1C1B18;
  font-family: Montserrat-SemiBold, sans-serif;
  font-size: 24px;
}
</style>
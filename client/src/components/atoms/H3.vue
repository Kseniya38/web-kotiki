<template>
  <h3>{{value_h3}}</h3>
</template>

<script>
export default {
  name: 'atom-h3',
  props: {
    value_h3: String
  }
}
</script>

<style scoped>
h3 {
  font-family: Montserrat-SemiBold, sans-serif;
  font-size: 24px;
}
</style>
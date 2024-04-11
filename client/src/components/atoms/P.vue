<template>
  <div><p>{{text_p}}</p></div>
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
p{
  font-weight: 500;
  font-size: 16px;
}
</style>
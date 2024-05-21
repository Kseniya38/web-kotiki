<template>
  <div class="logo" @click="$router.push('/')">
    <p>БАЗА ПОТЕРЯШЕК.РФ</p>
  </div>
</template>

<script>
export default {
  name: 'atom-logo'
}
</script>

<style scoped>
.logo {
  font-family: Montserrat-Medium, sans-serif;
  font-size: 20px;
  cursor: pointer;
}

</style>
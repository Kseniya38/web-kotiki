<template>
  <div>
    <select v-model="selected">
      <option disabled value="">Выберите</option>
      <option>А</option>
      <option>Б</option>
      <option>С</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'atom-selector',

}
</script>

<style >

</style>
<template>
  <div>
    <label>Порода
      <select v-model="selected">
        <option disabled value="">Выберите один из вариантов</option>
        <option>А</option>
        <option>Б</option>
        <option>В</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'molecules-titleSelector'
}
</script>

<style >

</style>
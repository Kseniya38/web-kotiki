<template>
  <div  class="FieldName">
    <label>{{name_field_label}}</label>
  </div>
</template>

<script>
export default {
  name: 'atom-field-name',
  props: {
    name_field_label:String,
  },
}
</script>

<style scoped>
.FieldName{
  font-weight: 500;
  font-size: 20px;
}
</style>

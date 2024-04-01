<template>
  <div class="characteristic ">
    <label><strong>{{ name_characteristic }}: </strong>{{value_characteristic}}</label>
  </div>
  </template>

<script>
export default {
  name: 'atom-characteristic',
  props: {
    name_characteristic:String,
    value_characteristic: String
  },
}
</script>

<style >
.characteristic{
  display: flex;

}

</style>
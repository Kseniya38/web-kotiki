<template>
  <div class="slc">
    <select v-model="selectedItem">
      <option v-for="item in selectItems">{{item.name}}</option>
    </select>
  </div>

</template>

<script>
export default {
  name: "atom-select",
  selectedItem:null,
  props: {
    selectItems: Array
  }
}


</script>

<style>
.slc
{
  margin-top: 4px;
  margin-left:4px;
}
</style>
<template>
  <div class ="title-select">
    <atom-field-name :name_field_label="name_field_label"/>
    <atom-select :selectItems="selectItems"/>
  </div>
</template>

<script>
import AtomFieldName from "@/components/atoms/FieldName.vue";
import AtomSelect from "@/components/atoms/Select.vue";

export default {
  name: 'molecule-title-select',
  components: {AtomSelect, AtomFieldName},
  selectedItem:null,
  props: {
    name_field_label: String,
    selectItems: Array
  }
}


</script>

<style>
.title-select{
  display: flex;
  align-items: center;
  text-align: left;
}
</style>
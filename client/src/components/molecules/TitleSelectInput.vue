<template>
  <div class ="title_select">
    <atom-field-name :name_field_label="name_field_label"/>
    <atom-select-input :select_items="select_items" :placeholder_select_input="placeholder_select_input"/>
  </div>
</template>

<script>
import AtomFieldName from "@/components/atoms/FieldName.vue";
import AtomSelectInput from "@/components/atoms/SelectInput.vue";
export default {
  name: 'molecule-title-select',
  components: {AtomSelectInput, AtomFieldName},
  selectedItem:null,
  props: {
    name_field_label: String,
    select_items: Array,
    placeholder_select_input: String,
  }
}
</script>

<style>
.title_select{
  display: flex;
  align-items: center;
  text-align: left;
}
</style>
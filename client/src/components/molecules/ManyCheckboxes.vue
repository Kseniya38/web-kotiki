<template>
  <div class="many_checkboxes">
   <atom-field-name :name_field_label/>
   <atom-checkbox
    v-for="listItem in list_drop_down"
    :label_checkbox="listItem"
    />
</div>
</template>

<script>
import AtomFieldName from "@/components/atoms/FieldName.vue";
import AtomCheckbox from "@/components/atoms/CheckBox.vue";

export default {

  components: {AtomCheckbox, AtomFieldName},
  name: 'molecule-many-checkboxes',
  props: {
    name_field_label:String,
    list_drop_down: Array,
  },
};
</script>

<style >
.many_checkboxes{
  display: flex;
  align-items: center;
  text-align: left;
}
</style>
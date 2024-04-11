<template>
  <div class ="title_input">
    <atom-field-name :name_field_label="name_field_label"/>
    <atom-input :text_placeholder_input="text_placeholder_input"/>
  </div>
</template>

<script>
import AtomInput from "@/components/atoms/Input.vue";
import AtomFieldName from "@/components/atoms/FieldName.vue";

export default {
  name: 'molecule-title-input',
  components: {AtomFieldName, AtomInput},
  props: {
    text_placeholder_input: String,
    name_field_label: String
  },
}
</script>

<style >
.title_input {
  display: flex;
  align-items: center;
  text-align: left;
}
</style>
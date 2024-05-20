<template>
  <div class="contact_container">
    <atom-field-name class="contacts_label" :name_field_label="'Контакты для связи'"/>
    <div class="contacts_list">
        <atom-contact-item v-for="(item, index) in contacts_list" :key="index" :contact_type="item.contact_type" :contact_info="item.contact_info"/>
    </div>
  </div>
</template>

<script>
import AtomFieldName from "@/components/atoms/FieldName.vue";
import AtomContactItem from "@/components/atoms/ContactButton.vue";

export default {
  name: "block-contacts",
  components: {AtomContactItem, AtomFieldName},
  props: {
    contacts_list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.contacts_label {
  max-width: 486px;
  text-align: center;
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: normal;
}
.contact_container {
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  max-width: 486px;
}
</style>


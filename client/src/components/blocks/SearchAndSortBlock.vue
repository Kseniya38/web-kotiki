<template>
  <div class ="search_sort_block">
    <molecule-search-line class="search_line_block" :text_placeholder_input="text_placeholder_input"/>
    <molecule-sort-button class="sort_btn_block" :name_field_label="name_field_label"/>
  </div>
</template>

<script>


import MoleculeSortButton from "@/components/molecules/SortButton.vue";
import MoleculeSearchLine from "@/components/molecules/SearchLine.vue";

export default {
  name: 'block-search-and-sort',
  components: {MoleculeSortButton, MoleculeSearchLine},
  props: {
    text_placeholder_input: String,
    name_field_label: String
  },
}
</script>

<style>
.search_sort_block{
  display: flex;
  height: 86px;
  gap: 20px;
  vertical-align: bottom;
  width: 885px;
}
.search_line_block {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 4px;
}
.sort_btn_block {
  margin: 6px 0 4px 10px;
}
</style>
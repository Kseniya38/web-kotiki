<template>
  <div class="sort_container">
    <atom-field-name class="sort_label" :name_field_label="name_field_label"/>
    <div >
      <button class="icon_btn_sort" @click="toggleSortDirection">
        <span>{{ sortDirection }}</span>
        <img class="arrow_sort_icon" :src="arrowSortIcon" alt="Сортировать по дате">
      </button>
    </div>
  </div>
</template>

<script>
import AtomFieldName from "@/components/atoms/FieldName.vue";

export default {
  name: "molecule-sort-button",
  components: {AtomFieldName},
  props: {
    name_field_label: String
  },
  data() {
    return {
      isAscending: false,
    };
  },
  computed: {
    arrowSortIcon() {
      return this.isAscending
          ? require("@/assets/icons/arrowUp.svg")
          : require("@/assets/icons/arrowDown.svg");
    },
    sortDirection() {
      return this.isAscending ? "Сначала старые" : "Сначала новые";
    },
  },
  methods: {
    toggleSortDirection() {
      this.isAscending = !this.isAscending;
    },
  },
}
</script>

<style>
.icon_btn_sort {
  display: flex;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  height: 52px;
  background-color: white;
  border: none;
  align-items: center;
  border-radius: 8px;
  width: 193px;
  justify-content: space-between;
  padding: 0 16px 0 16px;
}
.sort_label {
  font-weight: bold;
  width: 193px;
  text-align: center;
  margin-bottom: 4px;
}
</style>


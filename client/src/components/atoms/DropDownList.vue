<template>
  <div>
    <button class="drop_down_btn" @click="toggleDropdown">
      <img :src="arrowIcon" alt="Arrow Icon" class="arrow_icon" />
      {{ name_drop_down }}</button>
    <div v-if="isOpen" class="dropdown_content">
      <atom-checkbox v-for="item in formattedDropdownList" :key="item.id" :label_checkbox="item.label"/>
    </div>
  </div>

</template>

<script>
import AtomCheckbox from "@/components/atoms/CheckBox.vue";

export default {
  components: {
    AtomCheckbox,
  },
  name: 'atom-drop-down-list',
  props: {
    name_drop_down: String,
    list_drop_down: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    arrowIcon() {
      return this.isOpen ? require('@/assets/icons/upIcon.svg') : require('@/assets/icons/downIcon.svg');
    },
    formattedDropdownList() {
      return this.list_drop_down.map((item, index) => ({
        id: index,
        label: item
      }));
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style>
.drop_down_btn {
  font-size: 16px;
  font-weight: 600;
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0;
}

.arrow_icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>

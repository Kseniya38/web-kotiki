<template>
  <div>
    <button class="drop-down-btn" @click="toggleDropdown">{{ name_drop_down }}</button>
    <div v-if="isOpen" class="dropdown-content">
      <atom-checkbox
          v-for="listItem in list_drop_down"
          :label_checkbox="listItem"
      />
    </div>
  </div>
</template>

<script>
import AtomCheckbox from "@/components/atoms/CheckBox.vue";
export default {
  components: {
    AtomCheckbox
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
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style>
.drop-down-btn {
  border: none;
}
</style>
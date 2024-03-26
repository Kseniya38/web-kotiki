<template>
  <div>
    <button @click="toggleDropdown">{{ drop_down_name }}</button>
    <div v-if="isOpen" class="dropdown-content">
      <atom-checkbox
          v-for="listItem in list"
          :label="listItem"
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
  name: 'atom-drop_down_list',
  props: {
    drop_down_name: String,
    list: {
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

<style scoped>
button {
  border: none;
  background-color: #FFFFFF;
}
</style>
<template>
  <div class="select_input">
    <div class="custom_select_container">
      <select class="select-option" v-model="selectedItem" :class="{ 'custom_select': true, 'open': isOpen }" @click="toggleDropdown">
        <option :value="null" disabled selected hidden></option>
        <option  v-for="item in select_items" :value="item">{{ item }}</option>
      </select>
      <span class="placeholder_select_text" v-if="showPlaceholder">{{ placeholder_select_input }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "atom-select-input",
  data() {
    return {
      selectedItem: null,
      isOpen: false,
      showPlaceholder: true
    }
  },
  props: {
    select_items: Array,
    placeholder_select_input: String
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    }
  },
  watch: {
    selectedItem(newValue) {
      this.showPlaceholder = newValue === null
    }
  }
}
</script>

<style>
select {
  height: 52px;
}

.custom_select_container {
  position: relative;
  display: inline-block;
  width: 100%;
}
.select-option{
  font-family: 'Montserrat', sans-serif;
  color: #1C1B18;
  font-size: 16px;
}
.custom_select {
  appearance: none;
  background-repeat: no-repeat;
  background-position: right center;
  border-radius: 8px;
  border: 1px solid #1C1B18;
  padding: 5px 40px 5px 5px;
  cursor: pointer;
  min-width: 320px;
  width: 100%;
}
.custom_select.open {
  background-image: url('@/assets/icons/upIcon.svg');
}
.custom_select:not(.open) {
  background-image: url('@/assets/icons/downIcon.svg');
}
.placeholder_select_text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  color: #767676;
}
</style>


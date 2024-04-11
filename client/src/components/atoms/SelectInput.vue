<template>
  <div class="select_input">
    <div class="custom_select_container">
      <select v-model="selectedItem" :class="{ 'custom_select': true, 'open': isOpen }" @click="toggleDropdown">
        <option :value="null" disabled selected hidden></option>
        <option v-for="item in select_items" :value="item">{{ item }}</option>
      </select>
      <span class="placeholder_select_text">{{ placeholder_select_input }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "atom-select-input",
  data() {
    return {
      selectedItem: null,
      isOpen: false
    };
  },
  props: {
    select_items: Array,
    placeholder_select_input: String
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.select_input {
  margin-top: 4px;
  margin-left: 4px;
  select{
    width: 586px;
    height: 52px;

  }
}

.custom_select_container {
  position: relative;
  display: inline-block;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;

}

.custom_select {
  appearance: none;
  background-repeat: no-repeat;
  background-position: right center;
  border-radius: 8px;
  border: 1px solid #1C1B18;
  padding: 5px 25px 5px 5px;
  cursor: pointer;
  min-width: 300px;
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
  left: 4px;
  color: #767676;
}
</style>


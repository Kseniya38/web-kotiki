<template>
  <div>
    <button class="drop_down_btn" @click="toggleDropdown">
      <img :src="arrowIcon" alt="Arrow Icon" class="arrow_icon" />
      {{ name_drop_down }}</button>
    <div v-if="isOpen" class="dropdown_content">
      <atom-checkbox v-for="item in list_drop_down" :label_checkbox="item"/>
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
  computed: {
    arrowIcon() {
      return this.isOpen ? require('@/assets/icons/upIcon.svg') : require('@/assets/icons/downIcon.svg');
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
}

.arrow_icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>

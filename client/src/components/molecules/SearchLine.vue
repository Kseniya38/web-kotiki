<template>
  <div class ="search_line">
    <atom-input class="search_input" :text_placeholder_input="text_placeholder_input"/>
    <atom-button @click="handleButtonClick">Найти</atom-button>
  </div>
</template>

<script>
import AtomInput from "@/components/atoms/Input.vue";
import AtomButton from "@/components/atoms/Button.vue";

export default {
  name: 'molecule-search-line',
  components: {AtomButton, AtomInput},
  props: {
    text_placeholder_input: String
  },
  methods: {
    handleButtonClick() {
      // Логика обработки нажатия кнопки
    }
  }
}
</script>

<style >
.search_line {
  display: flex;
  align-items: center;
  gap: 20px;
  align-content: center;
  max-width: 661px;
}
.search_input {
  margin: 0;
  align-content: center;
  align-items: center;
  max-width: 552px;
}
</style>
<template>
  <div class ="search_line">
    <atom-input class="search_input" :text_placeholder_input="'Поиск по городу'" :modelValue="inputValue" @update:modelValue="handleInputChange" />
    <atom-button @click="handleButtonClick">Найти</atom-button>
  </div>
</template>

<script>
import AtomInput from "@/components/atoms/Input.vue";
import AtomButton from "@/components/atoms/Button.vue";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: 'molecule-search-line',
  components: {AtomButton, AtomInput},
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    ...mapActions(['updatePreviewItems']),
    handleInputChange(value) {
      this.inputValue = value
    },
    async handleButtonClick() {
      try {
        const response = await axios.get('http://localhost:5000/api/animal/', {
          params: {
            address: this.inputValue
          }
        });
        this.$emit('search', response.data.rows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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
  width: 100%;
}
</style>
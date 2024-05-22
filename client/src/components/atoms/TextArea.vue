<template>
  <div class="atom_textarea">
    <textarea v-model="text" rows="2" @input="adjustTextareaSize" maxlength = "1000" :placeholder="textarea_placeholder"></textarea>
  </div>
</template>

<script>
export default {
  name: 'atom-textarea',
  props: {
    textarea_placeholder: String,
  },
  data() {
    return {
      text: ''
    };
  },
  methods: {
    adjustTextareaSize(event) {
      event.target.style.height = 'auto'; // Сбрасываем высоту
      event.target.style.height = event.target.scrollHeight + 'px'; // Устанавливаем высоту в зависимости от содержимого
    }
  }
}
</script>

<style>
textarea {
  width: 580px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #1C1B18;
  max-width: 800px;
  overflow: auto;
  min-width: 300px;
  font-family: 'Montserrat', sans-serif;
  color: #1C1B18;
  font-size: 16px;
  align-content: center;
  padding-left: 12px;
}
</style>





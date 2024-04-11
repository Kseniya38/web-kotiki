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

<style >
textarea {
  max-width: 800px; /* Ограничиваем максимальную ширину textarea */
  overflow: auto;
  min-width: 300px;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
}
</style>





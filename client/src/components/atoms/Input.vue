<template>
  <div class="input_field">
    <input :placeholder="text_placeholder_input" :value="modelValue" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: 'atom-input',
  props: {
    text_placeholder_input: String,
    modelValue: String,
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.input_field {
  border: 1px solid #1C1B18;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 12px;
  align-content: center;
  background-color: white;
}
input {
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
}
</style>
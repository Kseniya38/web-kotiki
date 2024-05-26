<template>
  <button class="preview_button_atom" :class="{ 'active': isButtonClicked }" @click="handleButtonClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'atom-preview-button',
  data() {
    return {
      isButtonClicked: false
    }
  },
  methods: {
    handleButtonClick() {
      this.isButtonClicked = true;
    }
  }
}
</script>

<style scoped>
.preview_button_atom {
  background-color: #00BE57;
  color: #FFFFFF;
  border-radius: 8px;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  border: none;
  padding: 6px 32px;
  cursor: pointer;
}
.preview_button_atom:hover, .preview_button_atom:focus {
  background-color: #6504B5;
}
.preview_button_atom.active {
  background-color: #00BE57;
}
</style>
<template>
  <button class="btn" :class="{ 'active': isButtonClicked }" @click="handleButtonClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'atom-button',
  data() {
    return {
      isButtonClicked: false
    }
  },
  methods: {
    handleButtonClick() {
      this.isButtonClicked = true
    }
  }
}
</script>

<style>
.btn {
  background-color: #00BE57;
  color: #FFFFFF;
  border-radius: 8px;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
  border: none;
  padding: 16px 32px;
  cursor: pointer;
}
.btn:hover, .btn:focus {
  background-color: #6504B5;
}
</style>
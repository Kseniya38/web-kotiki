<template>
  <div class="container">
    <div>
      <img src="@/assets/icons/datePreview.png" alt="" id="date">
      <label for="date">{{date}}</label>
    </div>
    <div>
      <img src="@/assets/icons/locationPreview.png" alt="" id="location">
      <label for="location">{{location}}</label>
    </div>
    <div>
      <img src="@/assets/icons/colorPreview.png" alt="" id="color">
      <label for="color">{{color}}</label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'atom-description_preview',
  props: {
    date: String,
    location: String,
    color: String
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
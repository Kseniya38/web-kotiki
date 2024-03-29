<template>
  <div class="container">
    <div class="item">
      <img src="@/assets/icons/datePreview.png" alt="" id="date" class="icon">
      <label class="label" for="date">{{date}}</label>
    </div>
    <div class="item">
      <img src="@/assets/icons/locationPreview.png" alt="" id="location" class="icon">
      <label class="label" for="location">{{location}}</label>
    </div>
    <div class="item">
      <img src="@/assets/icons/colorPreview.png" alt="" id="color" class="icon">
      <label class="label" for="color">{{color}}</label>
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
  text-align: left;
}

.icon {
  width: 34px;
  height: 34px;
  margin-right: 4px; /* Отступ между иконкой и лейблом */
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.label {
  /* стили для лейбла, если необходимо */
}

</style>
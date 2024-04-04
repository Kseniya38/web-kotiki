<template>
  <div class="container_description_preview">
    <div class="characteristic_preview">
      <img src="@/assets/icons/datePreview.svg" alt="Дата" id="date" class="icon_preview">
      <label for="date">{{date_preview}}</label>
    </div>
    <div class="characteristic_preview">
      <img src="@/assets/icons/locationPreview.svg" alt="Адрес" id="location" class="icon_preview">
      <label for="location">{{location_preview}}</label>
    </div>
    <div class="characteristic_preview">
      <img src="@/assets/icons/colorPreview.svg" alt="Окрас" id="color" class="icon_preview">
      <label for="color">{{color_preview}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'atom-description-preview',
  props: {
    date_preview: String,
    location_preview: String,
    color_preview: String
  }
}
</script>

<style>
.container_description_preview {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.icon_preview {
  width: 34px;
  height: 34px;
  margin-right: 4px; /* Отступ между иконкой и лейблом */
}

.characteristic_preview {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  margin-left: 6px;
  margin-right: 6px;
}

</style>
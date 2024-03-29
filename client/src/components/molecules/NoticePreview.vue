<template>
  <div class="notice-preview">
    <img :src="imageSrc" alt="Notice Image" class="notice-preview-image" />
    <DescriptionPreview :date="date" :location="location" :color="color"/>
    <Button class="preview-button" @click="handleButtonClick">Подробнее</Button>
  </div>
</template>

<script>
import DescriptionPreview from "@/components/atoms/DescriptionPreview.vue";
import Button from "@/components/atoms/ViewButton.vue";
import AtomDescription_preview from "@/components/atoms/DescriptionPreview.vue";

export default {
  name: "NoticePreview",
  components: {
    AtomDescription_preview,
    DescriptionPreview,
    Button,
  },
  props: {
    imageSrc:String,
    date: String,
    location:String,
    color:String,
  },
  methods: {
    handleButtonClick() {
      // Логика обработки нажатия кнопки
    },
  },
};
</script>

<style scoped>
.notice-preview {
  max-width: 243px;
  text-align: center;
  height: 480px;
  position: relative;
  color: #1C1B18;
  font-family: Montserrat-Medium, sans-serif;
  border-radius: 8px;
}

.notice-preview-image {
  max-width: 243px;
  max-height: 258px;
  object-fit: cover;
}
.preview-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

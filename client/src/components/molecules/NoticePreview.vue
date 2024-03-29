<template>
  <div class="notice-preview">
    <div class="notice-container">
    <img :src="imageSrc" alt="Notice Image" class="notice-preview-image" />
      <ManageNoticeIconsBar class="preview-icons_bar"/>
    </div>
    <DescriptionPreview :date="date" :location="location" :color="color"/>
    <Button class="preview-button" @click="handleButtonClick">Подробнее</Button>
  </div>
</template>

<script>
import DescriptionPreview from "@/components/atoms/DescriptionPreview.vue";
import Button from "@/components/atoms/ViewButton.vue";
import AtomDescription_preview from "@/components/atoms/DescriptionPreview.vue";
import ManageNoticeIconsBar from "@/components/atoms/ManageNoticeIconsBar.vue";

export default {
  name: "NoticePreview",
  components: {
    AtomDescription_preview,
    DescriptionPreview,
    Button,
    ManageNoticeIconsBar,
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

.notice-container {
  position: relative;
}

.notice-container .preview-icons_bar {
  position: absolute;
  top: 6px;
  right: 7px;
}

.notice-preview-image {
  width: 100%;
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

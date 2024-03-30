<template>
  <div class="notice-preview">
    <div class="notice-container">
    <img :src="image_src_preview" alt="Notice Image" class="notice-preview-image" />
      <atom-manage-notice-icons-bar class="preview-icons_bar"/>
    </div>
    <atom-description-preview :date_preview="date_preview" :location_preview="location_preview" :color_preview="color_preview"/>
    <atom-preview-button class="preview-button" @click="handleButtonClick">Подробнее</atom-preview-button>
  </div>
</template>

<script>
import AtomPreviewButton from "@/components/atoms/PreviewButton.vue";
import AtomDescriptionPreview from "@/components/atoms/DescriptionPreview.vue";
import AtomManageNoticeIconsBar from "@/components/atoms/ManageNoticeIconsBar.vue";

export default {
  name: "molecule-notice-preview",
  components: {
    AtomManageNoticeIconsBar,
    AtomDescriptionPreview,
    AtomPreviewButton,
  },
  props: {
    image_src_preview:String,
    date_preview: String,
    location_preview:String,
    color_preview:String,
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

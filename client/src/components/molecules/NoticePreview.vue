<template>
  <div :class="['notice_preview', { 'active': notice_status === 'active', 'closed': notice_status === 'closed' }]">
    <div class="notice_container">
        <img :src="displayedImageSrc" alt="Фото питомца" class="notice_preview_image" />
      <atom-manage-notice-icons-bar :notice_status="notice_status" class="preview_icons_bar"/>
      <atom-animal-status-icon :animal_status="animal_status" :animal_type="animal_type" class="preview_animal_icon"/>
    </div>
    <atom-description-preview class="preview_description" :date_preview="date_preview" :location_preview="location_preview" :color_preview="color_preview"/>
    <atom-preview-button class="preview_button" @click="handleButtonClick">Подробнее</atom-preview-button>
  </div>
</template>

<script>
import AtomPreviewButton from "@/components/atoms/PreviewButton.vue";
import AtomDescriptionPreview from "@/components/atoms/DescriptionPreview.vue";
import AtomManageNoticeIconsBar from "@/components/atoms/ManageNoticeIconsBar.vue";
import AtomAnimalStatusIcon from "@/components/atoms/AnimalStatusIcon.vue";

export default {
  name: "molecule-notice-preview",
  components: {
    AtomAnimalStatusIcon,
    AtomManageNoticeIconsBar,
    AtomDescriptionPreview,
    AtomPreviewButton,
  },
  props: {
    image_src_preview:String,
    date_preview: String,
    location_preview:String,
    color_preview:String,
    notice_status: String,
    animal_status: String,
    animal_type: String,
  },
  methods: {
    handleButtonClick() {
      // Логика обработки нажатия кнопки
    }
  },
  computed: {
    displayedImageSrc() {
      if (this.image_src_preview) {
        return this.image_src_preview
      } else {
        if (this.animal_type === 'cat') {
          return require('@/assets/pictures/cat.svg')
        } else if (this.animal_type === 'dog') {
          return require('@/assets/pictures/dog.svg')
        }
      }
    }
  }
};
</script>

<style>
.notice_preview {
  max-width: 243px;
  text-align: center;
  height: 480px;
  position: relative;
  color: #1C1B18;
  font-family: Montserrat-Medium, sans-serif;
  border-radius: 8px;
}

.notice_preview.active {
  background-color: #fff;
}

.notice_preview.closed {
  background-color: #EFEEF1;
}

.notice_container {
  position: relative;
}

.notice_container .preview_icons_bar {
  position: absolute;
  top: 6px;
  right: 10px;
}

.notice_container .preview_animal_icon {
  position: absolute;
  bottom: -20px;
  right: 10px;
}

.notice_preview_image {
  width: 243px;
  height: 258px;
  object-fit: cover;
  border-radius: 8px;
}

.preview_description {
  margin-top: 8px;
}

.preview_button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

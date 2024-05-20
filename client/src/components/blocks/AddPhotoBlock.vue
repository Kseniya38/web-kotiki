<template>
  <div class="block_add_photo">
    <div class="content_add_photo">
    <div class="description_add_photo">
    <atom-p id="text" class="description_add_photo_text" :text_p="'Перетащите фото в эту область'"/>
    <img src="@/assets/icons/addPhotoIcon.svg" alt="Добавить фото"/>
    </div>
      <atom-p class="description_add_photo_text" :text_p="'или'"/>
    <atom-button class="btn_add_photo" @click="handleButtonClick">Добавить фото</atom-button>
    </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/Button.vue";
import AtomP from "@/components/atoms/P.vue";

export default {
  name: "block-add-photo",
  components: {AtomP, AtomButton},
  methods: {
    handleButtonClick() {
      // Логика обработки нажатия кнопки
    }
  }
}
</script>

<style>
.block_add_photo {
  background-color: #DFBEF9;
  border-radius: 8px;
  text-align: center; /* Центрируем содержимое по горизонтали */
  padding: 90px 20px; /* Добавляем отступы для блока */
  position: relative;
  min-height: min-content;
  max-width: 1000px;
}

.content_add_photo {
  position: relative; /* Устанавливаем позицию для позиционирования кнопки */
}

.btn_add_photo {
  background-color: #6504B5;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.description_add_photo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.description_add_photo_text {
  margin-right: 30px;
  margin-bottom: 24px;
  margin-top: 24px;
  color: #6504B5;
  width: 100%;
}

.description_add_photo_text#text {
  max-width: 160px;
}
</style>

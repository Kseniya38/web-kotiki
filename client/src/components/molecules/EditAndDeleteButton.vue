<template>
<div class="EaDButton">
<atom-edit-button class="edit_btn" @click="handleButtonClick">Редактировать</atom-edit-button>
  <atom-del-button class="del_btn" @click="handleButtonClick">Удалить</atom-del-button>
</div>
</template>

<script>
import AtomEditButton from "@/components/atoms/EditButton.vue"
import AtomDelButton from "@/components/atoms/DeleteButton.vue"

export default {
  name: 'molecule-edit-delete-btn',
  components: {AtomDelButton, AtomEditButton},
  methods: {
    handleButtonClick() {
      // Логика обработки нажатия кнопки
    }
  }
}
</script>

<style >
.EaDButton{
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 20px;

}

</style>
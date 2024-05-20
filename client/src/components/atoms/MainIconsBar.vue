<template>
  <div class="main_icons_bar">
    <button class="main_icon_btn">
      <img src="@/assets/icons/lostPetMainIcon.svg" alt="Потеряли питомца">
      <span class="btn_title">Потеряли</span>
    </button>
    <button class="main_icon_btn">
      <img src="@/assets/icons/foundPetMainIcon.svg" alt="Нашли питомца">
      <span class="btn_title">Нашли</span>
    </button>
    <button class="main_icon_btn">
      <img src="@/assets/icons/createNoticeMainIcon.svg" alt="Создать объявление">
      <span class="btn_title">Создать объявление</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'atom-main-icons-bar',
}
</script>

<style>
.main_icons_bar {
  display: flex;
  justify-content: space-between;
  width: 582px;
}
.main_icon_btn {
  width: 178px;
  height: 178px;
  border: 1px solid #6504B5;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  border-radius: 8px;
  background-color: white;
  gap: 16px;
  justify-content: center;
  cursor: pointer;
}
.main_icon_btn:hover {
  background-color: #DFBEF9;
}
.btn_title {
  text-align: center;
  color: #6504B5;
  width: 128px;
  vertical-align: middle;
  font-weight: 700;
}
</style>

<template>
  <button class="icon_btn">
    <img class="icon_act" src="@/assets/icons/activeNotice.svg" alt="">
  </button>
</template>

<script>
export default {
  name: 'atom-user_icon_active'
}
</script>

<style>
.icon_btn {
  background: #FFFFFF;
  border: none;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  align-items: center;
}
.icon_act {
  height: 30px;
  width: 29px;
}
</style>
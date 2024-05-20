<template>
  <div class="user_button">
    <template v-if="user_status === true">
      <button class="icon_btn_user">
        <img class="user_icon" src="@/assets/icons/userIcon.svg" alt="Личный кабинет">
      </button>
    </template>
    <template v-else-if="user_status === false">
      <atom-button class="login_button">ВОЙТИ</atom-button>
    </template>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/Button.vue";

export default {
  name: 'atom-user-button',
  components: {
    AtomButton,
  },
  props: {
    user_status: Boolean,
  }
}
</script>

<style>
.icon_btn_user {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}
.login_button {
  border: none;
  background: transparent;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  padding: 0;
}
.user_button {
  padding: 0;
  max-height: 50px;
  width: 90px;
  display: flex;
  justify-content: right;
  border-left-color: white;
  margin-left: 40px;
  border-left: solid thin;
}
.user_icon {
  width: 46px;
  height: 46px;
}
</style>
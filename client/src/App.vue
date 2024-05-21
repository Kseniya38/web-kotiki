<template>
  <div class="app">
    <block-header :user_status="user_status"/>
    <router-view :user_status="user_status"></router-view>
    <block-footer/>
  </div>
</template>

<script>
import Main from "@/views/Main.vue";
import BlockHeader from "@/components/blocks/Header.vue";
import BlockFooter from "@/components/blocks/Footer.vue";
export default {
  components: {
    BlockFooter,
    BlockHeader,
    Main
  },
  data() {
    return {
      user_status: true
    }
  }
}
</script>

<style>
@import "@/assets/fonts/fonts.css";
body {
  padding: 0;
  margin: 0;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #1C1B18;
  background: #EFEEF1;
}
</style>
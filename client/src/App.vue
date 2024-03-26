<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Main from "@/views/Main.vue";
export default {
  components: {
    Main
  }
}
</script>

<style>
@import "@/assets/fonts/fonts.css";
</style>
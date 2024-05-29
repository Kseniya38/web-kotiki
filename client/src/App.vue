<template>
  <div class="app">
    <block-header :user_status="user_status" :handle_lost_pet_click="handleLostPetClick" :handle_found_pet_click="handleFoundPetClick"/>
    <router-view :user_status="user_status"></router-view>
    <block-footer/>
  </div>
</template>

<script>
import Main from "@/views/Main.vue";
import BlockHeader from "@/components/blocks/Header.vue";
import BlockFooter from "@/components/blocks/Footer.vue";
import BlockMainBanner from "@/components/blocks/MainBanner.vue";
import {mapActions} from "vuex";
export default {
  components: {
    BlockMainBanner,
    BlockFooter,
    BlockHeader,
    Main
  },
  data() {
    return {
      user_status: true
    }
  },
  methods: {
    ...mapActions(['updateLostPetPreviewItems', 'updateFoundPetPreviewItems']),
    handleLostPetClick(previewItems) {
      this.updateLostPetPreviewItems(previewItems)
    },
    handleFoundPetClick(previewItems) {
      this.updateFoundPetPreviewItems(previewItems)
    },
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
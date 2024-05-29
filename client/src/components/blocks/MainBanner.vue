<template>
  <div class="banner_container">
    <div class="banner">
      <img class="img_banner" src="@/assets/pictures/banner.png" alt="Banner">
      <div class="banner_text">
        База потерянных и найденных домашних животных</div>
    </div>
    <div class="main_icons_bar_container" >
      <div class="main_icons_bar">
        <atom-main-icons-bar @handleLostPetClick="handle_lost_pet_click" @handleFoundPetClick="handle_found_pet_click" />
      </div>
    </div>
  </div>
</template>

<script>
import AtomMainIconsBar from "@/components/atoms/MainIconsBar.vue"

export default {
  name: "block-main-banner",
  components: {
    AtomMainIconsBar,
  },
  props: {
    handle_lost_pet_click: {
      type: Function,
      required: true
    },
    handle_found_pet_click: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.banner_container {
  position: relative;
  width: 100%;
  margin-bottom: 55px;
}

.banner {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.banner_text {
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #FFFFFF;
  top: 50%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0 20px 20px 0;
  height: 88px;
  width: 580px;
  left: 0;
  position: absolute;
  padding: 20px 20px 20px 69px;
}

.main_icons_bar_container {
  position: absolute;
  top: 78%;
  width: 100%;
}
.main_icons_bar {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.img_banner {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div class="main_icons_bar">
    <button class="main_icon_btn" @click="handleLostPetClick">
      <img class="main_icon_svg" src="@/assets/icons/lostPetMainIcon.svg" alt="Потеряли питомца">
      <span class="btn_title">Потеряли</span>
    </button>
    <button class="main_icon_btn" @click="handleFoundPetClick">
      <img class="main_icon_svg" src="@/assets/icons/foundPetMainIcon.svg" alt="Нашли питомца">
      <span class="btn_title">Нашли</span>
    </button>
    <button class="main_icon_btn">
      <img class="main_icon_svg" src="@/assets/icons/createNoticeMainIcon.svg" alt="Создать объявление">
      <span class="btn_title">Создать объявление</span>
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'
import {mapActions, mapMutations} from "vuex"

export default {
  name: 'atom-main-icons-bar',
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    ...mapActions(['updateLostPetPreviewItems', 'updateFoundPetPreviewItems']),
    ...mapMutations(['setLostPetPreviewItems', 'setFoundPetPreviewItems']),
    async handleLostPetClick() {
      try {
        const response = await axios.get('http://localhost:5000/api/animal', {
          params: {
            animalStatusId: 1
          }
        })
        this.$emit('handleLostPetClick', response.data.rows)
        await this.router.replace({ name: 'Search' })
      } catch (error) {
        console.error('Error fetching lost pets:', error)
      }
    },
    async handleFoundPetClick() {
      try {
        const response = await axios.get('http://localhost:5000/api/animal', {
          params: {
            animalStatusId: 2
          }
        })
        this.$emit('handleFoundPetClick', response.data.rows)
        await this.router.replace({ name: 'Search' })
      } catch (error) {
        console.error('Error fetching lost pets:', error)
      }
    }
  }
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
  .main_icon_svg {
    fill: white;
    stroke: white;
  }
}
.btn_title {
  text-align: center;
  color: #6504B5;
  width: 128px;
  vertical-align: middle;
  font-weight: 700;
}
</style>

<template>
  <div class="header_block d_flex">
  <div class="header d_flex">
    <atom-logo class="logo"/>
    <div class="d_flex btn_bar_header">
    <atom-button class="pets_button" @click="handleLostPetClick">ПОТЕРЯННЫЕ ПИТОМЦЫ</atom-button>
    <atom-button class="pets_button" @click="handleFoundPetClick">НАЙДЕННЫЕ ПИТОМЦЫ</atom-button>
    <atom-button class="create_notice_button">СОЗДАТЬ ОБЪЯВЛЕНИЕ</atom-button>
    <atom-user-button :user_status="user_status"/>
    </div>
  </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/Button.vue"
import AtomLogo from "@/components/atoms/Logo.vue"
import AtomUserButton from "@/components/atoms/UserButton.vue"
import axios from "axios"
import { useRouter } from 'vue-router'

export default {
  name: "block-header",
  setup() {
    const router = useRouter()
    return { router }
  },
  components: {
    AtomUserButton,
    AtomLogo,
    AtomButton,
  },
  props: {
    user_status:Boolean,

  },
  methods: {
    async handleLostPetClick() {
      try {
        const response = await axios.get('/api/animal', {
          params: {
            animalStatusId: 1
          }
        })
        this.$store.dispatch('updateLostPetPreviewItems', response.data.rows)
        await this.router.push({ name: 'Search' })
      } catch (error) {
        console.error('Error fetching lost pets:', error)
      }
    },
    async handleFoundPetClick() {
      try {
        const response = await axios.get('/api/animal', {
          params: {
            animalStatusId: 2
          }
        })
        this.$store.dispatch('updateLostPetPreviewItems', response.data.rows)
        await this.router.push({ name: 'Search' })
      } catch (error) {
        console.error('Error fetching lost pets:', error)
      }
    }
  },
}
</script>

<style>
.header {
  color: #FFFFFF;
  margin: 4px;
  align-items: center;
  width: 1210px;
  justify-content: space-between;
}
.d_flex {
  display: flex;
}
.pets_button {
  background-color: transparent;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  padding: 0;
  margin-right: 40px;
}
.pets_button:hover, .pets_button:focus {
  text-decoration: underline;
}
.create_notice_button {
  background-color: white;
  color: #6504B5;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px
}
.create_notice_button:hover, .create_notice_button:focus {
  background-color: #DFBEF9;
  color: white;
}
.header_block {
  width: 100%;
  background-color: #6504B5;
  justify-content: center;
}
.logo {
  font-size: 20px;
  margin-right: 30px;
}
.btn_bar_header {
  padding: 12px 0;
}
</style>

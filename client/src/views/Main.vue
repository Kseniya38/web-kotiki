<template>
  <div>
    <block-main-banner :handle_lost_pet_click="handleLostPetClick" :handle_found_pet_click="handleFoundPetClick"/>
    <div class="search_line_main_container">
      <molecule-search-line class="search_line_main"/>
    </div>
    <block-recommendations :items_preview="latestPreviewItems" :value_h2="'Новые объявления'" :url="'/search'"/>
  </div>
</template>

<script>
import BlockMainBanner from "@/components/blocks/MainBanner.vue";
import MoleculeSearchLine from "@/components/molecules/SearchLine.vue";
import BlockRecommendations from "@/components/blocks/RecommendationBlock.vue";
import axios from "axios";
import { mapActions } from 'vuex'

export default {
  components: {BlockRecommendations, MoleculeSearchLine, BlockMainBanner},
  props: {
    user_status: Boolean,
  },
  data() {
    return {
      previewItems: [],
      latestPreviewItems: [],
      page: 1,
      limit: 9,
      totalCount: 0,
      sterilizationId: null,
      healthId: null,
      genderId: null,
      ageId: null,
      colorId: null,
      animalStatusId: null,
      animalTypeId: null,
      breedId: null,
      address: null,
      userId: null,
      noticeStatusId: 1,
      date_lowerRange: null,
      date_upperRange: null
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
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/animal', {
          params: {
            page: this.page,
            limit: this.limit,
            sterilizationId: this.sterilizationId,
            healthId: this.healthId,
            genderId: this.genderId,
            ageId: this.ageId,
            colorId: this.colorId,
            animalStatusId: this.animalStatusId,
            animalTypeId: this.animalTypeId,
            breedId: this.breedId,
            address: this.address,
            userId: this.userId,
            noticeStatusId: this.noticeStatusId,
            date_lowerRange: this.date_lowerRange,
            date_upperRange: this.date_upperRange
          }
        })
        this.previewItems = response.data.rows
        this.totalCount = response.data.count
        this.setLatestPreviewItems();
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    setLatestPreviewItems() {
      this.latestPreviewItems = this.previewItems
          .slice(0, 4)
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    },
  },
  mounted() {
    this.fetchData()
  },
}
</script>

<style>
.search_line_main_container {
  width: 100%;
  display: flex;
  margin-top: 145px;
  margin-bottom: 96px;
  justify-content: center;
}
.search_line_main {
  width: 661px;
}
</style>
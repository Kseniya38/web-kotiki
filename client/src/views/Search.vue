<template>
  <atom-h1 class="search_h1" :value_h1="'Объявления'"/>
  <div class="search_container">
    <div class="search_filter_container">
      <block-filter-bar :items_drop_down="filterBarItems"/>
    </div>
    <div class="right_search_block">
      <block-search-and-sort class="search_sort_line" @search="handleSearch" @sort="handleSort" />
      <div class="search_results_container">
        <block-notice-preview-line class="results_line" :items_preview="previewItems"/>
      </div>
    </div>
  </div>
</template>

<script>
import BlockFilterBar from "@/components/blocks/FilterBar.vue"
import BlockNoticePreviewLine from "@/components/blocks/NoticePreviewLine.vue"
import BlockSearchAndSort from "@/components/blocks/SearchAndSortBlock.vue"
import AtomH1 from "@/components/atoms/H1.vue"
import axios from "axios"
import {mapActions, mapGetters} from "vuex"

export default {
  name: "Search",
  components: {AtomH1, BlockSearchAndSort, BlockNoticePreviewLine, BlockFilterBar},
  props: {
    user_status: Boolean
  },
  data() {
    return {
      filterBarItems: [],
      previewItems: [],
      //page: 1,
      //limit: 20,
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
      date_upperRange: null,
    }
  },
  methods: {
    ...mapActions(['updateLostPetPreviewItems', 'updateFoundPetPreviewItems', 'updatePreviewItems', 'sortPreviewItems']),
    handleSearch(data) {
      this.updatePreviewItems(data)
    },
    handleSort(isAscending) {
      this.sortPreviewItems(isAscending)
    },
    async handleLostPetClick(previewItems) {
      this.updateLostPetPreviewItems(previewItems)
    },
    async handleFoundPetClick(previewItems) {
      this.updateFoundPetPreviewItems(previewItems)
    },
    async fetchDefaultPreviewItems() {
      try {
        const response = await axios.get('https://kseniya38.github.io/web-kotiki/api/animal/', {
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
        this.updatePreviewItems(response.data.rows.sort((a, b) => new Date(b.notices[0].createdAt) - new Date(a.notices[0].createdAt)))
        this.totalCount = response.data.count
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async fetchFilterBarData() {
      try {
        const response = await axios.get('https://kseniya38.github.io/web-kotiki/api/referenceBooks/')
        this.filterBarItems = response.data
      } catch (error) {
        console.error('Error fetching reference books:', error)
      }
    }
  },
  computed: {
    ...mapGetters(['getPreviewItems']),
    previewItems() {
      return this.getPreviewItems
    }
  },
  mounted() {
    if (this.getPreviewItems.length === 0) {
    this.fetchDefaultPreviewItems()
    }
    this.fetchFilterBarData()
  }
}
</script>

<style>
.search_container {
  display: flex;
  justify-content: space-between;
  border: none;
  margin-right: 71px;
  margin-left: 71px;
  margin-bottom: 50px;
}
.search_filter_container {
  display: flex;
  width: 25%;
}

.search_results_container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.results_line {
  width: 900px;
}
.right_search_block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.search_h1 {
  margin-left: 71px;
}
.search_sort_line {
  margin-bottom: 50px;
}
</style>
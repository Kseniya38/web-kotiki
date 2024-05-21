<template>
  <div>
    <block-main-banner/>
    <div class="search_line_main_container">
      <molecule-search-line class="search_line_main"/>
    </div>
    <block-recommendations :items_preview="previewItems" :value_h2="'Новые объявления'" :url="'/search'"/>
  </div>
</template>

<script>
import BlockMainBanner from "@/components/blocks/MainBanner.vue";
import MoleculeSearchLine from "@/components/molecules/SearchLine.vue";
import BlockRecommendations from "@/components/blocks/RecommendationBlock.vue";

export default {
  components: {BlockRecommendations, MoleculeSearchLine, BlockMainBanner},
  props: {
    user_status: Boolean
  },
  data() {
    return {
      previewItems:  [
        { animal_type: "cat", animal_status: "lost", notice_status: "active", imageSrc: require('@/assets/pictures/test2.jpg'), date: "29 сентября 2023", location: "р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный" },
        { animal_type: "dog", animal_status: "found", notice_status: "active", imageSrc: require('@/assets/pictures/test1.png'), date: "17 января 2024", location: "г. Ангарск, мкр Университетский, ул. Рабочая", color: "серый" },
        { animal_type: "cat", animal_status: "found", notice_status: "closed", imageSrc: "", date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" },
        { animal_type: "dog", animal_status: "lost", notice_status: "closed", imageSrc: "", date: "1 мая 2023", location: "мкр Университетский", color: "серый" }
      ]
    }
  }
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
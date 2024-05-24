<template>
  <atom-h1 class="search_h1" :value_h1="'Объявления'"/>
  <div class="search_container">
    <div class="search_filter_container">
      <block-filter-bar :items_drop_down="filterBarItems"/>
    </div>
    <div class="right_search_block">
      <block-search-and-sort class="search_sort_line"/>
      <div class="search_results_container">
        <block-notice-preview-line class="results_line" :items_preview="previewItems"/>
      </div>
    </div>
  </div>
</template>

<script>
import BlockFilterBar from "@/components/blocks/FilterBar.vue";
import BlockNoticePreviewLine from "@/components/blocks/NoticePreviewLine.vue";
import BlockSearchAndSort from "@/components/blocks/SearchAndSortBlock.vue";
import AtomH1 from "@/components/atoms/H1.vue";
import axios from "axios";



export default {
  components: {AtomH1, BlockSearchAndSort, BlockNoticePreviewLine, BlockFilterBar},
  props: {
    user_status: Boolean
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/animal/', {
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
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async fetchFilterBarData() {
      try {
        const response = await axios.get('http://localhost:5000/api/referenceBooks/');
        this.filterBarItems = response.data;
      } catch (error) {
        console.error('Error fetching reference books:', error);
      }
    }
  },

  mounted() {
    this.fetchData()
    this.fetchFilterBarData()
  },

  data() {
    return {
      filterBarItems: [],
      previewItems: [],
      page: 1,
      limit: 9,
      totalCount: 0,
      // Добавьте новые параметры фильтрации
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
    /*return {
      filterBarItems: [
        { name_drop_down: "Статус животного", list_drop_down: ['Нашлось', 'Потерялось']},
        { name_drop_down: "Тип животного", list_drop_down: ['Кошка', 'Собака']},
        { name_drop_down: "Окрас", list_drop_down: ['Черный', 'Белый', 'Зебра', 'Инверсная зебра', 'Черный', 'Белый', 'Зебра', 'Инверсная зебра']},
        { name_drop_down: "Возраст", list_drop_down: ['Детеныш', 'Подросток', 'Взрослый', 'Старый', 'Новорожденный']},
        { name_drop_down: "Порода", list_drop_down: ['Беспородный', 'Породистый' ]},
        { name_drop_down: "Пол", list_drop_down: ['Мальчик', 'Девочка']},
        { name_drop_down: "Состояние здоровья", list_drop_down: ['Здоров', 'Травмирован', 'Истощен', 'Беременная', 'Инвалид', 'Болен']},
        { name_drop_down: "Стерилизация", list_drop_down: ['Да', 'Нет']}
      ],
      previewItems:  [
        { animal_type: "cat", animal_status: "lost", notice_status: "active", imageSrc: require('@/assets/pictures/test2.jpg'), date: "29 сентября 2023", location: "р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный" },
        { animal_type: "dog", animal_status: "found", notice_status: "active", imageSrc: require('@/assets/pictures/test1.png'), date: "17 января 2024", location: "г. Ангарск, мкр Университетский, ул. Рабочая", color: "серый" },
        { animal_type: "cat", animal_status: "found", notice_status: "active", imageSrc: "", date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" },
        { animal_type: "cat", animal_status: "lost", notice_status: "active", imageSrc: require('@/assets/pictures/test2.jpg'), date: "29 сентября 2023", location: "р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный" },
        { animal_type: "dog", animal_status: "found", notice_status: "active", imageSrc: require('@/assets/pictures/test1.png'), date: "17 января 2024", location: "г. Ангарск, мкр Университетский, ул. Рабочая", color: "серый" },
        { animal_type: "cat", animal_status: "found", notice_status: "active", imageSrc: "", date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" },
        { animal_type: "cat", animal_status: "found", notice_status: "active", imageSrc: "", date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" }
      ]
    }*/
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
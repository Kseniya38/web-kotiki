<template>
  <div class="notice_data">
  <atom-h1 :value_h1="'Объявление'" />
  <div class="notice_detail_container">
    <div class="notice_detail_left_column">
      <block-photo-viewer :photos="photos" />
    </div>
    <div class="notice_detail_right_column">
      <block-contacts :contacts_list="contacts_list" :user_status="user_status"/>
      <molecule-infoblock :mandatory_characteristics="mandatoryCharacteristics" :optional_characteristics="optionalCharacteristics" />
    </div>
  </div>
  <molecule-comment-infoblock :text_p="text_comment" :value_h3="'Комментарий'" />
  </div>
  <block-recommendations :items_preview="previewItems" :value_h2="'Рекомендуемые объявления'" :url="'/search'" />
</template>

<script>
import AtomH1 from "@/components/atoms/H1.vue";
import BlockPhotoViewer from "@/components/blocks/DetailPhotoBlock.vue";
import BlockContacts from "@/components/blocks/ContactsBlock.vue";
import MoleculeInfoblock from "@/components/molecules/Infoblock.vue";
import AtomLocationIcon from "@/components/atoms/LocationIcon.vue";
import MoleculeCommentInfoblock from "@/components/molecules/CommentInfoblock.vue";
import BlockRecommendations from "@/components/blocks/RecommendationBlock.vue";

export default {
  components: {BlockRecommendations, MoleculeCommentInfoblock, MoleculeInfoblock, BlockContacts, BlockPhotoViewer, AtomH1},
  data() {
    return {
      contacts_list: [{contact_type:"phone", contact_info: "89041234567"}, {contact_type: "link", contact_info: "vk.com/blablabla123"}],
      photos: [require('@/assets/pictures/test1.png'), require('@/assets/pictures/test2.jpg'), require('@/assets/pictures/test.png'), require('@/assets/pictures/dog.svg')],
      previewItems:  [
        { animal_type: "cat", animal_status: "lost", notice_status: "active", imageSrc: require('@/assets/pictures/test2.jpg'), date: "29 сентября 2023", location: "р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный" },
        { animal_type: "dog", animal_status: "found", notice_status: "active", imageSrc: require('@/assets/pictures/test1.png'), date: "17 января 2024", location: "г. Ангарск, мкр Университетский, ул. Рабочая", color: "серый" },
        { animal_type: "cat", animal_status: "found", notice_status: "active", imageSrc: "", date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" },
        { animal_type: "dog", animal_status: "lost", notice_status: "active", imageSrc: "", date: "1 мая 2023", location: "мкр Университетский", color: "серый" }
      ],
      mandatoryCharacteristics: [
        {name: "Дата находки/пропажи", value: "2020-09-18"},
        {name: "Дата публикации", value: "2020-09-19"},
        {name: AtomLocationIcon, value: "г. Ангарск, мкр Университетский, ул. Рабочая"},
        {name: "Окрас", value: "белый, рыжий, черный, полосатый"},
      ],
      optionalCharacteristics: [
        {name: "Кличка", value: "Капитан"},
        {name: "Возраст", value: "Подросток (0,5 - 1 год)"},
        {name: "Пол", value: "Мальчик"},
        {name: "Порода", value: "Кличка"},
        {name: "Состояние здоровья", value:"Здоров"},
        {name: "Стерилизация", value: "нет"}
      ],
      text_comment: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имениLorem ipsum решила выйти в большой мир грамматики."
    }
  },
  props: {
    user_status: Boolean
  }
}
</script>

<style>
.notice_detail_container {
  display: flex;
  justify-content: space-between;
}

.notice_detail_left_column {
  flex: 1;
  margin-right: 50px;
}

.notice_detail_right_column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.right-column > * {
  margin-bottom: 50px;
}
.notice_data {
  margin-left: 71px;
  margin-right: 71px;
}
</style>
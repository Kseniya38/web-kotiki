<template>
  <div class="main">

    <h1>Тест атомов</h1>

    <atom-logo/>
    <atom-h1 :value_h1="h1"/>
    <atom-h2 :value_h2="h2"/>
    <atom-h3 :value_h3="h3"/>
    <atom-button>Кнопка</atom-button>
    <atom-link :url="url" :text_link="link"></atom-link>
    <atom-checkbox :label_checkbox="label"/>
    <atom-drop-down-list :name_drop_down="drop_name" :list_drop_down="list"/>
    <atom-preview-button>Посмотреть</atom-preview-button>

    <atom-manage-notice-icons-bar :notice_status="'active'"/>
    <atom-manage-notice-icons-bar :notice_status="'closed'"/>

    <atom-animal-status-icon :animal_status="'lost'" :animal_type="'cat'"/>
    <atom-animal-status-icon :animal_status="'found'" :animal_type="'dog'"/>
    <atom-animal-status-icon :animal_status="'found'" :animal_type="'cat'"/>

    <atom-description-preview :date_preview="date" :location_preview="location" :color_preview="color"/>

    <atom-characteristic :name_characteristic="label" :value_characteristic="date"/>
    <atom-characteristic :name_characteristic="LocationIcon" value_characteristic="Значение для LocationIcon"/>

    <atom-field-name :name_field_label="name_field_label"/>
    <atom-input :text_placeholder_input="h3"/>
    <atom-p :text_p="text_p"/>
    <atom-textarea :textarea_placeholder="h3 + h2"/>
    <atom-switch :name_left_switch="h2" :name_right_switch="h3"/>

    <h1>Тест молекулов @___@</h1>

    <molecule-infoblock :mandatory_characteristics="mandatoryCharacteristics" :optional_characteristics="optionalCharacteristics"/>

    <molecule-comment :textarea_placeholder="h3 + h2" :value_h3="comment"/>
    <molecule-comment-infoblock :text_p="text_p+text_p" :value_h3="comment"/>

    <molecule-many-checkboxes :name_field_label="name_field_label" :list_drop_down="list"/>

    <molecule-title-input :name_field_label="name_field_label" :text_placeholder_input="h3"/>

    <molecule-notice-preview :animal_status="'lost'" :animal_type="'cat'" :notice_status="'active'" :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-notice-preview :animal_status="'found'" :animal_type="'cat'" :notice_status="'closed'" :image_src_preview="require('@/assets/pictures/test.png')" :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-notice-preview :animal_status="'found'" :animal_type="'dog'" :notice_status="'closed'" :date_preview="date" :location_preview="location" :color_preview="color"/>

    <molecule-notice-preview-line :items_preview="previewItems"/>
    <molecule-recommendation-block :items_preview="previewItems" :value_h2="h2" :text_link="link" :url="url"/>
  </div>
</template>

<script>
// import from atoms
import AtomH1 from "@/components/atoms/H1.vue";
import AtomH2 from "@/components/atoms/H2.vue";
import AtomH3 from "@/components/atoms/H3.vue";
import AtomButton from "@/components/atoms/Button.vue";
import AtomLogo from "@/components/atoms/Logo.vue";
import AtomLink from "@/components/atoms/Link.vue";
import AtomCheckbox from "@/components/atoms/CheckBox.vue";
import AtomDropDownList from "@/components/atoms/DropDownList.vue";
import AtomPreviewButton from "@/components/atoms/PreviewButton.vue";
import AtomManageNoticeIconsBar from "@/components/atoms/ManageNoticeIconsBar.vue";
import AtomDescriptionPreview from "@/components/atoms/DescriptionPreview.vue";
import AtomCharacteristic from "@/components/atoms/Characteristic.vue";
import AtomTextarea from "@/components/atoms/TextArea.vue";
import AtomFieldName from "@/components/atoms/FieldName.vue";
import AtomInput from "@/components/atoms/Input.vue";
import AtomP from "@/components/atoms/P.vue";
import AtomSwitch from "@/components/atoms/Switch.vue";
import AtomLocationIcon from "@/components/atoms/LocationIcon.vue";
import AtomAnimalStatusIcon from "@/components/atoms/AnimalStatusIcon.vue";

// import from molecules
import MoleculeNoticePreview from "@/components/molecules/NoticePreview.vue";
import MoleculeComment from "@/components/molecules/Comment.vue";
import MoleculeInfoblock from "@/components/molecules/Infoblock.vue";
import MoleculeManyCheckboxes from "@/components/molecules/ManyCheckboxes.vue";
import MoleculeTitleInput from "@/components/molecules/TitleInput.vue";
import MoleculeCommentInfoblock from "@/components/molecules/CommentInfoblock.vue";

// import from blocks
import MoleculeNoticePreviewLine from "@/components/blocks/NoticePreviewLine.vue";
import MoleculeRecommendationBlock from "@/components/blocks/RecommendationBlock.vue";

export default {
  components: {
    // atoms
    AtomAnimalStatusIcon,
    AtomLocationIcon,
    AtomSwitch,
    AtomTextarea,
    AtomP,
    AtomInput,
    AtomFieldName,
    AtomCharacteristic,
    AtomDescriptionPreview,
    AtomManageNoticeIconsBar,
    AtomPreviewButton,
    AtomDropDownList,
    AtomCheckbox,
    AtomLink,
    AtomLogo,
    AtomButton,
    AtomH3,
    AtomH2,
    AtomH1,

    // molecules
    MoleculeNoticePreview,
    MoleculeNoticePreviewLine,
    MoleculeRecommendationBlock,
    MoleculeTitleInput,
    MoleculeManyCheckboxes,
    MoleculeInfoblock,
    MoleculeComment,
    MoleculeCommentInfoblock,
  },
  data() {
    return {
      LocationIcon: AtomLocationIcon,
      h1: 'Котики',
      h2: 'Кошка',
      h3: 'Собака',
      link: 'Ссылка',
      url: "https://www.google.com/",
      label: "Название характеристики",
      drop_name: 'Окрас',
      list: ['Черный', 'Белый', 'Зебра', 'Инверсная зебра'],
      date: '2020-09-18',
      publication_date: "2020-09-19",
      location: 'Иркутск',
      color: 'Белый',
      name_field_label:"Название",
      text_p: "Какой-то рандомный текст ",
      comment: "Комментарий",
      selectItems: [
        {name: "Беспородный"},
        {name: "Австралийский мист"},
        {name: "Бирманская"},
        {name: "Мэнск"},
      ],
      previewItems:  [
        { animal_type: "cat", animal_status: "lost", notice_status: "active", imageSrc: require('@/assets/pictures/test.png'), date: "29 сентября 2023", location: "р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный" },
        { animal_type: "dog", animal_status: "found", notice_status: "active", imageSrc: require('@/assets/pictures/test1.png'), date: "17 января 2024", location: "г. Ангарск, мкр Университетский, ул. Рабочая", color: "серый" },
        { animal_type: "cat", animal_status: "found", notice_status: "closed", imageSrc: "", date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" },
        { animal_type: "dog", animal_status: "lost", notice_status: "closed", imageSrc: "", date: "1 мая 2023", location: "мкр Университетский", color: "серый" }
      ],
      mandatoryCharacteristics: [
        {name: "Дата инцидента", value: "2020-09-18"},
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
    }
  }
}
</script>

<style scoped>
.main {
  background: #EFEEF1;
}
</style>
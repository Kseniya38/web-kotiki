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
    <atom-manage-notice-icons-bar/>
    <atom-description-preview :date_preview="date" :location_preview="location" :color_preview="color"/>
    <atom-characteristic :name_characteristic="label" :value_characteristic="date"/>
    <atom-field-name :name_field_label="name_field_label"/>
    <atom-input :text_placeholder_input="h3"/>
    <atom-p :text_p="text_p"/>
    <atom-textarea :text_textarea_input="h3 + h2"/>
    <atom-switch :name_left_switch="h2" :name_right_switch="h3"/>
    <atom-select :selectItems="selectItems"/>


    <h1>Тест молекулов @___@</h1>

    <molecule-infoblock :title_data="title_data" :date="date"
                        :title_publication_date="title_publication_date" :publication_date="publication_date"
                        :location="location"
                        :title_color="title_color"  :color="color"
                        :title_nickname="title_nickname"  :nickname="nickname"
                        :title_age="title_age"  :age="age"
                        :title_gender="title_gender"  :gender="gender"
                        :title_breed="title_breed" :breed="breed"
                        :title_health="title_health" :health="health"
                        :title_sterilization="title_sterilization" :sterilization="sterilization"/>
    <molecule-comment :text_textarea_input="h3 + h2" :value_h3="comment"/>
    <molecule-comment-infoblock :text_p="text_p+text_p" :value_h3="comment"/>
    <molecule-many-checkboxes :name_field_label="name_field_label" :list_drop_down="list"/>
    <molecule-title-select :name_field_label="name_field_label" :selectItems="selectItems"/>
    <molecule-title-input :name_field_label="name_field_label" :text_placeholder_input="h3"/>
    <molecule-notice-preview :image_src_preview="require('@/assets/pictures/cat.svg')" :date_preview="date" :location_preview="location" :color_preview="color"/>
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
import dropDownList from "@/components/atoms/DropDownList.vue";
import AtomSwitch from "@/components/atoms/Switch.vue";

// import from molecules
import MoleculeNoticePreview from "@/components/molecules/NoticePreview.vue";
import MoleculeNoticePreviewLine from "@/components/molecules/NoticePreviewLine.vue";
import MoleculeRecommendationBlock from "@/components/molecules/RecommendationBlock.vue";
import MoleculeComment from "@/components/molecules/Comment.vue";
import MoleculeInfoblock from "@/components/molecules/Infoblock.vue";
import MoleculeManyCheckboxes from "@/components/molecules/ManyCheckboxes.vue";
import MoleculeTitleSelector from "@/components/molecules/TitleSelect.vue";
import MoleculeTitleInput from "@/components/molecules/TitleInput.vue";
import Molecule from "@/components/molecules/molecule.vue";
import MoleculeCommentInfoblock from "@/components/molecules/CommentInfoblock.vue";
import AtomSelect from "@/components/atoms/Select.vue";
import MoleculeTitleSelect from "@/components/molecules/TitleSelect.vue";
import AtomLocationIcon from "@/components/atoms/LocationIcon.vue";


export default {
  computed: {
    dropDownList() {
      return dropDownList
    }
  },
  components: {
    AtomLocationIcon,
    MoleculeTitleSelect,
    AtomSelect,
    MoleculeCommentInfoblock,
    Molecule,
    // atoms
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
    MoleculeTitleSelector,
    MoleculeManyCheckboxes,
    MoleculeInfoblock,
    MoleculeComment,
  },
  data() {
    return {
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
      nickname: 'Капитан',
      gender: "М",
      health: "Да",
      age: "Взрослый",
      breed: "Беспородный",
      sterilization: "Нет",
      name_field_label:"Название",
      text_p: "Какой-то рандомный текст ",
      comment: "Комментарий",
       selectItems: [
        {name: "Беспородный"},
        {name: "Австралийский мист"},
        {name: "Бирманская"},
        {name: "Мэнск"},
      ],
      title_data:"Дата",
      title_publication_date: "Дата публикации",
      title_color: "Окрас",
      title_nickname: "Кличка",
      title_gender: "Пол",
      title_health: "Состояние здоровья",
      title_age: "Возраст",
      title_breed: "Порода",
      title_sterilization: "Стерилизация",
      previewItems:  [
        { imageSrc: require('@/assets/pictures/cat.svg'), date: "29 сентября 2023", location: "р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный" },
        { imageSrc: require('@/assets/pictures/dog.svg'), date: "17 января 2024", location: "г. Ангарск, мкр Университетский, ул. Рабочая", color: "серый" },
        { imageSrc: require('@/assets/pictures/cat.svg'), date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" },
        { imageSrc: require('@/assets/pictures/dog.svg'), date: "1 мая 2023", location: "мкр Университетский", color: "серый" }
      ]
    }
  }
}
</script>

<style scoped>
.main {
  background: #EFEEF1;
}
</style>

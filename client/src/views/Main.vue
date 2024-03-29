<template>
  <div class="main">
    <h1>Тест атомов</h1>
    <atom-logo/>
    <atom-h1 :value="h1"/>
    <atom-h2 :value="h2"/>
    <atom-h3 :value="h3"/>
    <atom-button>Кнопка</atom-button>
    <atom-link :url="url" :text="link"></atom-link>
    <atom-checkbox :label="label"/>
    <atom-drop_down_list :drop_down_name="drop_name" :list="list"/>
    <atom-view_button>Посмотреть</atom-view_button>
    <atom-user_icons/>
    <atom-description_preview :date="date" :location="location" :color="color"/>
    <atom-characteristic/>
    <atom-fieldname/>
    <atom-input/>
    <atom-p/>
    <atom-textarea/>
    <atom-switch/>
    <h1>Тест молекулов @___@</h1>
    <molecules-infblock :date="date" :location="location" :color="color" :nickname="nickname" :age="age" :gender="gender" :breed="breed" :health="health" :sterilization="sterilization"/>
    <molecules-comment/>
    <molecules-manycheckboxes :drop_down_name="drop_name"/>
    <molecules-title-selector/>
    <molecules-titel-input/>
    <NoticePreview :imageSrc="require('@/assets/pictures/cat.jpg')" :date="date" :location="location" :color="color"/>
    <NoticePreviewLine :items="previewItems"/>
    <RecommendationBlock :items="previewItems" :value="h2" :text="link" :url="url"/>
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
import AtomDrop_down_list from "@/components/atoms/DropDownList.vue";
import AtomView_button from "@/components/atoms/ViewButton.vue";
import AtomUser_icons from "@/components/atoms/UserIcons.vue";
import AtomDescription_preview from "@/components/atoms/DescriptionPreview.vue";
import AtomCharacteristic from "@/components/atoms/Characteristic.vue";
import AtomTextarea from "@/components/atoms/TextArea.vue";
import AtomFieldname from "@/components/atoms/FieldName.vue";
import AtomInput from "@/components/atoms/Input.vue";
import AtomP from "@/components/atoms/P.vue";
import dropDownList from "@/components/atoms/DropDownList.vue";
import AtomSwitch from "@/components/atoms/Switch.vue";

// import from molecules
import NoticePreview from "@/components/molecules/NoticePreview.vue";
import NoticePreviewLine from "@/components/molecules/NoticePreviewLine.vue";
import RecommendationBlock from "@/components/molecules/RecommendationBlock.vue";
import MoleculesComment from "@/components/molecules/Comment.vue";
import MoleculesInfblock from "@/components/molecules/Infoblock.vue";
import MoleculesManycheckboxes from "@/components/molecules/ManyCheckboxes.vue";
import Molecule from "@/components/molecules/molecule.vue";
import MoleculesTitleSelector from "@/components/molecules/TitleSelector.vue";
import MoleculesTitelInput from "@/components/molecules/TitleInput.vue";

export default {
  computed: {
    dropDownList() {
      return dropDownList
    }
  },
  components: {
    // atoms
    AtomSwitch,
    AtomTextarea,
    AtomP,
    AtomInput,
    AtomFieldname,
    AtomCharacteristic,
    AtomDescription_preview,
    AtomUser_icons,
    AtomView_button,
    AtomDrop_down_list,
    AtomCheckbox,
    AtomLink,
    AtomLogo,
    AtomButton,
    AtomH3,
    AtomH2,
    AtomH1,

    // molecules
    NoticePreview,
    NoticePreviewLine,
    RecommendationBlock,
    MoleculesTitelInput,
    MoleculesTitleSelector,
    Molecule,
    MoleculesManycheckboxes,
    MoleculesInfblock,
    MoleculesComment,
  },
  data() {
    return {
      h1: 'Котики',
      h2: 'Котики',
      h3: 'Котики',
      link: 'Ссылка',
      url: "https://www.google.com/",
      label: "Название характеристики",
      drop_name: 'Окрас',
      list: ['Черный', 'Белый', 'Зебра', 'Инверсная зебра'],
      date: '2020-09-18',
      location: 'Иркутск',
      color: 'Белый',
      nickname: 'Капитан',
      gender: "М",
      health: "Да",
      age: "Взрослый",
      breed: "Беспородный",
      sterilization: "Нет",
      previewItems:  [
        { imageSrc: require('@/assets/pictures/cat.jpg'), date: "29 сентября 2023", location: "р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный" },
        { imageSrc: require('@/assets/pictures/dog.jpg'), date: "17 января 2024", location: "г. Ангарск, мкр Университетский, ул. Рабочая", color: "серый" },
        { imageSrc: require('@/assets/pictures/cat.jpg'), date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" },
        { imageSrc: require('@/assets/pictures/dog.jpg'), date: "1 мая 2023", location: "мкр Университетский", color: "серый" }
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

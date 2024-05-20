<template>
  <div class="main">

    <h1>Тест атомов</h1>

    <atom-contact-item :contact_type="'phone'" :contact_info="'89041234567'"/>
    <atom-contact-item :contact_type="'link'" :contact_info="'vk.com/blablabla123blablabla123blablabla123'"/>

    <atom-logo/>
    <atom-h1 :value_h1="h1"/>
    <atom-h2 :value_h2="h2"/>
    <atom-h3 :value_h3="h3"/>

    <atom-button>Кнопка</atom-button>
    <atom-del-button>Удалить</atom-del-button>
    <atom-edit-button>Редактировать</atom-edit-button>
    <atom-link :url="url" :text_link="link"/>
    <atom-preview-button>Посмотреть</atom-preview-button>

    <atom-manage-notice-icons-bar :notice_status="'active'"/>
    <atom-manage-notice-icons-bar :notice_status="'closed'"/>

    <atom-animal-status-icon :animal_status="'lost'" :animal_type="'cat'"/>
    <atom-animal-status-icon :animal_status="'found'" :animal_type="'dog'"/>
    <atom-animal-status-icon :animal_status="'found'" :animal_type="'cat'"/>

    <atom-description-preview :date_preview="date" :location_preview="location" :color_preview="color"/>

    <atom-characteristic :name_characteristic="label" :value_characteristic="date"/>
    <atom-characteristic :name_characteristic="LocationIcon" value_characteristic="Значение для LocationIcon"/>

    <atom-checkbox :label_checkbox="label"/>
    <atom-drop-down-list :name_drop_down="drop_name" :list_drop_down="list"/>

    <atom-field-name :name_field_label="name_field_label"/>
    <atom-input :text_placeholder_input="placeholderTest"/>
    <atom-select-input :select_items="list" :placeholder_select_input="placeholderTest"/>
    <atom-textarea :textarea_placeholder="placeholderTest"/>

    <atom-p :text_p="text_p"/>
    <atom-switch :name_left_switch="h2" :name_right_switch="h3"/>

    <atom-main-icons-bar/>

    <h1>Тест молекулов @___@</h1>

    <molecule-search-line :text_placeholder_input="sort_ph"/>
    <molecule-sort-button :name_field_label="sort"/>

    <molecule-title-select :name_field_label="name_field_label" :select_items="list" :placeholder_select_input="placeholderTest"/>
    <molecule-title-input :name_field_label="name_field_label" :text_placeholder_input="placeholderTest"/>

    <molecule-infoblock :mandatory_characteristics="mandatoryCharacteristics" :optional_characteristics="optionalCharacteristics"/>

    <molecule-comment :textarea_placeholder="placeholderTest" :value_h3="comment"/>
    <molecule-comment-infoblock :text_p="text_p+text_p" :value_h3="comment"/>

    <molecule-many-checkboxes :name_field_label="name_field_label" :list_drop_down="list"/>

    <molecule-notice-preview :animal_status="'lost'" :animal_type="'cat'" :notice_status="'active'" :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-notice-preview :animal_status="'found'" :animal_type="'cat'" :notice_status="'closed'" :image_src_preview="require('@/assets/pictures/test.png')" :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-notice-preview :animal_status="'found'" :animal_type="'dog'" :notice_status="'closed'" :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-edit-delete-btn></molecule-edit-delete-btn>

    <h1>Тест блоков Х___Х</h1>

    <block-header :user_status="true"/>
    <block-header :user_status="false"/>

    <block-main-banner/>

    <block-footer/>

    <block-filter-bar :items_drop_down="filterBarItems"/>
    <block-search-and-sort :name_field_label="sort" :text_placeholder_input="sort_ph"/>

    <block-contacts :contacts_list="contacts_list"/>
    <block-photo-viewer :photos="photos"/>

    <block-menu-personal-cabinet/>

    <block-navigation-line/>
    <block-navigation-line :step="2"/>

    <block-add-photo/>

    <block-photo-line :images="images"/>

    <block-notice-preview-line :items_preview="previewItems"/>
    <block-recommendations :items_preview="previewItems" :value_h2="h2" :text_link="link" :url="url"/>
  </div>
</template>

<script>
// import from atoms
import AtomH1 from "@/components/atoms/H1.vue";
import AtomH2 from "@/components/atoms/H2.vue";
import AtomH3 from "@/components/atoms/H3.vue";
import AtomButton from "@/components/atoms/Button.vue";
import AtomDelButton from "@/components/atoms/DeleteButton.vue";
import AtomEditButton from "@/components/atoms/EditButton.vue";
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
import AtomSelectInput from "@/components/atoms/SelectInput.vue";

// import from molecules
import MoleculeNoticePreview from "@/components/molecules/NoticePreview.vue";
import MoleculeComment from "@/components/molecules/Comment.vue";
import MoleculeInfoblock from "@/components/molecules/Infoblock.vue";
import MoleculeManyCheckboxes from "@/components/molecules/ManyCheckboxes.vue";
import MoleculeTitleInput from "@/components/molecules/TitleInput.vue";
import MoleculeCommentInfoblock from "@/components/molecules/CommentInfoblock.vue";
import MoleculeTitleSelect from "@/components/molecules/TitleSelectInput.vue";
import MoleculeEditDeleteBtn from "@/components/molecules/EditAndDeleteButton.vue";

// import from blocks
import BlockNoticePreviewLine from "@/components/blocks/NoticePreviewLine.vue";
import BlockRecommendations from "@/components/blocks/RecommendationBlock.vue";
import BlockNavigationLine from "@/components/blocks/NavigationLine.vue";
import BlockAddPhoto from "@/components/blocks/AddPhotoBlock.vue";
import BlockPhotoLine from "@/components/blocks/PhotoLine.vue";
import BlockHeader from "@/components/blocks/Header.vue";
import BlockFooter from "@/components/blocks/Footer.vue";
import BlockFilterBar from "@/components/blocks/FilterBar.vue";
import AtomMainIconsBar from "@/components/atoms/MainIconsBar.vue";
import BlockMainBanner from "@/components/blocks/MainBanner.vue";
import MoleculeSearchLine from "@/components/molecules/SearchLine.vue";
import MoleculeSortButton from "@/components/molecules/SortButton.vue";
import BlockSearchAndSort from "@/components/blocks/SearchAndSortBlock.vue";
import BlockContacts from "@/components/blocks/ContactsBlock.vue";
import AtomContactItem from "@/components/atoms/ContactButton.vue";
import BlockPhotoViewer from "@/components/blocks/DetailPhotoBlock.vue";
import BlockMenuPersonalCabinet from "@/components/blocks/MenuPersonalCabinet.vue";




export default {
  components: {
    BlockMenuPersonalCabinet,
    BlockPhotoViewer,
    AtomContactItem,
    BlockContacts,
    BlockSearchAndSort,
    MoleculeSortButton,
    MoleculeSearchLine,
    BlockMainBanner,
    AtomMainIconsBar,
    BlockFilterBar,
    BlockFooter,
    BlockHeader,
    BlockPhotoLine,
    MoleculeEditDeleteBtn,


    // atoms
    AtomSelectInput,
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
    AtomEditButton,
    AtomDelButton,
    AtomButton,
    AtomH3,
    AtomH2,
    AtomH1,

    // molecules
    MoleculeNoticePreview,
    MoleculeTitleInput,
    MoleculeManyCheckboxes,
    MoleculeInfoblock,
    MoleculeComment,
    MoleculeCommentInfoblock,
    MoleculeTitleSelect,

    // blocks
    BlockRecommendations,
    BlockNoticePreviewLine,
    BlockNavigationLine,
    BlockAddPhoto,
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
      list: ['Черный', 'Белый', 'Зебра', 'Инверсная зебра', 'Черный', 'Белый', 'Зебра', 'Инверсная зебра'],
      date: '2020-09-18',
      publication_date: "2020-09-19",
      location: 'Иркутск',
      color: 'Белый',
      name_field_label:"Название",
      sort: "Сортировать по дате",
      sort_ph: "Начните вводить адрес",
      text_p: "Какой-то рандомный текст Какой-то рандомный текст Какой-то рандомный текст Какой-то рандомный текст  Какой-то рандомный текст Какой-то рандомный текст",
      comment: "Комментарий",
      placeholderTest: "Плейсхолдер всякий",
      selectItems: [
        {name: "Беспородный"},
        {name: "Австралийский мист"},
        {name: "Бирманская"},
        {name: "Мэнск"},
        {name: "Беспородный"},
        {name: "Австралийский мист"},
        {name: "Бирманская"},
        {name: "Мэнск"},
      ],
      previewItems:  [
        { animal_type: "cat", animal_status: "lost", notice_status: "active", imageSrc: require('@/assets/pictures/test2.jpg'), date: "29 сентября 2023", location: "р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный" },
        { animal_type: "dog", animal_status: "found", notice_status: "active", imageSrc: require('@/assets/pictures/test1.png'), date: "17 января 2024", location: "г. Ангарск, мкр Университетский, ул. Рабочая", color: "серый" },
        { animal_type: "cat", animal_status: "found", notice_status: "closed", imageSrc: "", date: "8 марта 2024", location: "г. Иркутск, р-н Октябрьский, ул. Байкальская", color: "белый, рыжий, черный, полосатый" },
        { animal_type: "dog", animal_status: "lost", notice_status: "closed", imageSrc: "", date: "1 мая 2023", location: "мкр Университетский", color: "серый" }
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
      images: [require('@/assets/pictures/test1.png'), require('@/assets/pictures/test.png'), require('@/assets/pictures/test2.jpg')],
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
      contacts_list: [{contact_type:"phone", contact_info: "89041234567"}, {contact_type: "link", contact_info: "vk.com/blablabla123"}],
      photos: [require('@/assets/pictures/test1.png'), require('@/assets/pictures/test2.jpg'), require('@/assets/pictures/test.png'), require('@/assets/pictures/dog.svg')]
    }
  }
}
</script>

<style scoped>
.main {
  background: #EFEEF1;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #1C1B18;
}
</style>
<template>
  <div class="test">
    <atom-h1 :value_h1="'СТРАНИЦА ТЕСТИРОВАНИЯ КОМПОНЕНТОВ'"/>
    <atom-h2 :value_h2="'АТОМЫ'"/>



    <atom-h3 :value_h3="'Атомы для Главной, Поиска и Детальной объявления'"/>

    <h4>Логотип</h4>
    <atom-logo/>

    <h4>Кнопки и ссылки</h4>
    <atom-button>Кнопка</atom-button>
    <atom-preview-button>Посмотреть</atom-preview-button>
    <atom-link :url="'https://maps.app.goo.gl/tMDuWY99gNjRCzKa9'" :text_link="'Ссылка в Сибирь'"/>

    <h4>Иконки типа и статуса животного</h4>
    <atom-animal-status-icon :animal_status=1 :animal_type=3 />
    <atom-animal-status-icon :animal_status=2 :animal_type=5 />
    <atom-animal-status-icon :animal_status=2 :animal_type=3 />

    <h4>Иконки для Главной страницы</h4>
    <atom-main-icons-bar/>

    <h4>Описание для превью объявления</h4>
    <atom-description-preview :date_preview="'2020-09-18'" :location_preview="location" :color_preview="color"/>

    <h4>Контакты для Детальной объявления</h4>
    <atom-contact-item :user_status="user_status" :contact_type="'phone'" :contact_info="'89041234567'"/>
    <atom-contact-item :user_status="user_status" :contact_type="'link'" :contact_info="'vk.com/blablabla123blablabla123blablabla123'"/>

    <h4>Характеристики животного для Детальной объявления</h4>
    <atom-characteristic :name_characteristic="label" :value_characteristic="date"/>
    <atom-characteristic :name_characteristic="LocationIcon" :value_characteristic="'Значение для LocationIcon'"/>
    <atom-p :text_p="text_p"/>



    <atom-h3 :value_h3="'Атомы для Личного кабинета'"/>

    <h4>Кнопки управления объявлением</h4>
    <atom-del-button>Удалить</atom-del-button>
    <atom-edit-button>Редактировать</atom-edit-button>

    <h4>Иконки управления объявлением</h4>
    <atom-manage-notice-icons-bar :notice_status=1 />
    <atom-manage-notice-icons-bar :notice_status=2 />



    <atom-h3 :value_h3="'Атомы для Добавления и Редактирования объявления'"/>

    <atom-checkbox :label_checkbox="label"/>
    <atom-drop-down-list :name_drop_down="drop_name" :list_drop_down="list"/>
    <atom-field-name :name_field_label="name_field_label"/>
    <atom-input :text_placeholder_input="placeholderTest"/>
    <atom-select-input :select_items="list" :placeholder_select_input="placeholderTest"/>
    <atom-textarea :textarea_placeholder="placeholderTest"/>
    <atom-switch :name_left_switch="'Кошка'" :name_right_switch="'Собака'"/>




    <atom-h2 :value_h2="'МОЛЕКУЛЫ @___@'"/>



    <atom-h3 :value_h3="'Молекулы для Главной, Поиска и Детальной объявления'"/>

    <h4>Превью объявления</h4>
    <molecule-notice-preview :animal_status=1 :animal_type=3 :notice_status=1 :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-notice-preview :animal_status=2 :animal_type=3 :notice_status=1 :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-notice-preview :animal_status=2 :animal_type=5 :notice_status=1 :date_preview="date" :location_preview="location" :color_preview="color"/>

    <h4>Поиск и сортировка</h4>
    <molecule-search-line/>
    <molecule-sort-button/>

    <h4>Область характеристик животного для Детальной объявления</h4>
    <molecule-infoblock :mandatory_characteristics="mandatoryCharacteristics" :optional_characteristics="optionalCharacteristics"/>
    <molecule-comment-infoblock :text_p="text_p+text_p" :value_h3="comment"/>



    <atom-h3 :value_h3="'Молекулы для Личного кабинета, Добавления и Редактирования объявления'"/>

    <molecule-notice-preview :user_status=true :animal_status=2 :animal_type=3 :notice_status=1 :image_src_preview="''" :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-notice-preview :user_status=true :animal_status=2 :animal_type=5 :notice_status=2 :date_preview="date" :location_preview="location" :color_preview="color"/>
    <molecule-edit-delete-btn/>
    <molecule-comment :textarea_placeholder="placeholderTest" :value_h3="comment"/>
    <molecule-many-checkboxes :name_field_label="name_field_label" :list_drop_down="list"/>
    <molecule-title-select :name_field_label="name_field_label" :select_items="list" :placeholder_select_input="placeholderTest"/>
    <molecule-title-input :name_field_label="name_field_label" :text_placeholder_input="placeholderTest"/>




    <atom-h2 :value_h2="'БЛОКИ Х___Х'"/>



    <atom-h3 :value_h3="'Общие для всех страниц блоки'"/>

    <h4>Шапка залогиненного человека</h4>
    <block-header :user_status="true"/>

    <h4>Шапка курильщика</h4>
    <block-header :user_status="false"/>

    <h4>Подвал</h4>
    <block-footer/>



    <atom-h3 :value_h3="'Блоки для Главной, Поиска и Детальной объявления'"/>

    <h4>Баннер и бар иконок для Главной</h4>
    <block-main-banner :handle_lost_pet_click="handleLostPetClick" :handle_found_pet_click="handleFoundPetClick" />

    <h4>Блок рекомендаций для Главной и Детальной объявления</h4>
    <block-recommendations :items_preview="latestPreviewItems" :value_h2="'Новые объявления'"/>

    <h4>Фильтр, строка поиска и сортировка для Поиска</h4>
    <block-filter-bar :items_drop_down="filterBarItems"/>
    <block-search-and-sort @search="handleSearch" @sort="handleSort" />

    <h4>Блок результатов для Поиска</h4>
    <block-notice-preview-line :items_preview="latestPreviewItems"/>

    <h4>Блок контактов для Детальной объявления</h4>
    <block-contacts :contacts_list="contacts_list"/>

    <h4>Блок фотографий для Детальной объявления</h4>
    <block-photo-viewer :photos="photos"/>



    <atom-h3 :value_h3="'Блоки для Личного кабинета, Добавления и Редактирования объявления'"/>

    <h4>Меню для Личного кабинета</h4>
    <block-menu-personal-cabinet/>

    <h4>Навигация для этапов Добавления объявления</h4>
    <block-navigation-line/>
    <block-navigation-line :step="2"/>

    <h4>Добавление фотографий для Добавления и Редактирования объявления</h4>
    <block-add-photo/>
    <block-photo-line :images="images"/>

  </div>
</template>

<script>
// import from atoms
import AtomH1 from "@/components/atoms/H1.vue"
import AtomH2 from "@/components/atoms/H2.vue"
import AtomH3 from "@/components/atoms/H3.vue"
import AtomButton from "@/components/atoms/Button.vue"
import AtomDelButton from "@/components/atoms/DeleteButton.vue"
import AtomEditButton from "@/components/atoms/EditButton.vue"
import AtomLogo from "@/components/atoms/Logo.vue"
import AtomLink from "@/components/atoms/Link.vue"
import AtomCheckbox from "@/components/atoms/CheckBox.vue"
import AtomDropDownList from "@/components/atoms/DropDownList.vue"
import AtomPreviewButton from "@/components/atoms/PreviewButton.vue"
import AtomManageNoticeIconsBar from "@/components/atoms/ManageNoticeIconsBar.vue"
import AtomDescriptionPreview from "@/components/atoms/DescriptionPreview.vue"
import AtomCharacteristic from "@/components/atoms/Characteristic.vue"
import AtomTextarea from "@/components/atoms/TextArea.vue"
import AtomFieldName from "@/components/atoms/FieldName.vue"
import AtomInput from "@/components/atoms/Input.vue"
import AtomP from "@/components/atoms/P.vue"
import AtomSwitch from "@/components/atoms/Switch.vue"
import AtomLocationIcon from "@/components/atoms/LocationIcon.vue"
import AtomAnimalStatusIcon from "@/components/atoms/AnimalStatusIcon.vue"
import AtomSelectInput from "@/components/atoms/SelectInput.vue"
import AtomMainIconsBar from "@/components/atoms/MainIconsBar.vue"
import AtomContactItem from "@/components/atoms/ContactButton.vue"

// import from molecules
import MoleculeNoticePreview from "@/components/molecules/NoticePreview.vue"
import MoleculeComment from "@/components/molecules/Comment.vue"
import MoleculeInfoblock from "@/components/molecules/Infoblock.vue"
import MoleculeManyCheckboxes from "@/components/molecules/ManyCheckboxes.vue"
import MoleculeTitleInput from "@/components/molecules/TitleInput.vue"
import MoleculeCommentInfoblock from "@/components/molecules/CommentInfoblock.vue"
import MoleculeTitleSelect from "@/components/molecules/TitleSelectInput.vue"
import MoleculeEditDeleteBtn from "@/components/molecules/EditAndDeleteButton.vue"
import MoleculeSearchLine from "@/components/molecules/SearchLine.vue"
import MoleculeSortButton from "@/components/molecules/SortButton.vue"

// import from blocks
import BlockNoticePreviewLine from "@/components/blocks/NoticePreviewLine.vue"
import BlockRecommendations from "@/components/blocks/RecommendationBlock.vue"
import BlockNavigationLine from "@/components/blocks/NavigationLine.vue"
import BlockAddPhoto from "@/components/blocks/AddPhotoBlock.vue"
import BlockPhotoLine from "@/components/blocks/PhotoLine.vue"
import BlockHeader from "@/components/blocks/Header.vue"
import BlockFooter from "@/components/blocks/Footer.vue"
import BlockFilterBar from "@/components/blocks/FilterBar.vue"
import BlockMainBanner from "@/components/blocks/MainBanner.vue"
import BlockSearchAndSort from "@/components/blocks/SearchAndSortBlock.vue"
import BlockContacts from "@/components/blocks/ContactsBlock.vue"
import BlockPhotoViewer from "@/components/blocks/DetailPhotoBlock.vue"
import BlockMenuPersonalCabinet from "@/components/blocks/MenuPersonalCabinet.vue"

//other imports
//import {mapActions, mapGetters} from "vuex"
import axios from "axios"

export default {
  components: {
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
    AtomContactItem,
    AtomMainIconsBar,

    // molecules
    MoleculeNoticePreview,
    MoleculeTitleInput,
    MoleculeManyCheckboxes,
    MoleculeInfoblock,
    MoleculeComment,
    MoleculeCommentInfoblock,
    MoleculeTitleSelect,
    MoleculeSortButton,
    MoleculeSearchLine,
    MoleculeEditDeleteBtn,

    // blocks
    BlockRecommendations,
    BlockNoticePreviewLine,
    BlockNavigationLine,
    BlockAddPhoto,
    BlockMenuPersonalCabinet,
    BlockPhotoViewer,
    BlockContacts,
    BlockSearchAndSort,
    BlockMainBanner,
    BlockFilterBar,
    BlockFooter,
    BlockHeader,
    BlockPhotoLine,
  },
  data() {
    return {
      // response
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
      date_upperRange: null,

      filterBarItems: [],

      contacts_list: [],
      photos: [],
      mandatoryCharacteristics: [],
      optionalCharacteristics: [],
      text_comment: null,
      id: null,
      route: this.$route,

      // mocks
      //user_status: true,
      LocationIcon: AtomLocationIcon,
      label: "Название характеристики",
      drop_name: 'Окрас',
      list: ['Черный', 'Белый', 'Зебра', 'Инверсная зебра', 'Черный', 'Белый', 'Зебра', 'Инверсная зебра'],
      date: '2020-09-18',
      publication_date: "2020-09-19",
      location: 'Иркутск',
      color: 'Серобуромалиновый трендовый',
      name_field_label:"Название",
      sort: "Сортировать по дате",
      sort_ph: "Введите город",
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
      images: [require('@/assets/pictures/test1.png'), require('@/assets/pictures/test.png'), require('@/assets/pictures/test2.jpg')],
    }
  },
  methods: {
    //...mapActions(['updateLostPetPreviewItems', 'updateFoundPetPreviewItems', 'updatePreviewItems', 'sortPreviewItems']),
    handleSearch(data) {
      //this.updatePreviewItems(data)
    },
    handleSort(isAscending) {
      //this.sortPreviewItems(isAscending)
    },
    handleLostPetClick(previewItems) {
      //this.updateLostPetPreviewItems(previewItems)
    },
    handleFoundPetClick(previewItems) {
      //this.updateFoundPetPreviewItems(previewItems)
    },
    async fetchFilterBarData() {
      try {
        const response = await axios.get('http://localhost:5000/api/referenceBooks/')
        this.filterBarItems = response.data
      } catch (error) {
        console.error('Error fetching reference books:', error)
      }
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
        this.setLatestPreviewItems()
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    setLatestPreviewItems() {
      this.latestPreviewItems = this.previewItems.sort((a, b) => new Date(b.notices[0].createdAt) - new Date(a.notices[0].createdAt)).slice(0, 4)
    },
    async fetchNoticeDetails() {
      try {
        const response = await axios.get(`http://localhost:5000/api/animal/37`)
        this.contacts_list = [ { contact_type: "phone", contact_info: response.data.notices[0].user.telephone } || '', { contact_type: "link", contact_info: response.data.notices[0].user.social_media } || '']

        if (response.data.photo.first) this.photos[0] = `http://localhost:5000/static/${response.data.photo.first}`
        if (response.data.photo.second) this.photos[1] = `http://localhost:5000/static/${response.data.photo.second}`
        if (response.data.photo.third) this.photos[2] = `http://localhost:5000/static/${response.data.photo.third}`
        if (response.data.photo.fourth) this.photos[3] = `http://localhost:5000/static/${response.data.photo.fourth}`
        if (this.photos.length === 0) this.photos[0] = 'http://localhost:5000/static/noPhoto.svg'

        const eventDate = new Date(response.data.notices[0].event_date)
        const formattedEventDate = `${eventDate.getDate()}.${eventDate.getMonth() + 1}.${eventDate.getFullYear()}`
        const createdAtDate = new Date(response.data.notices[0].createdAt)
        const formattedAtDate = `${createdAtDate.getDate()}.${createdAtDate.getMonth() + 1}.${createdAtDate.getFullYear()}`

        this.mandatoryCharacteristics = [
          { name: "Дата находки/пропажи", value: formattedEventDate },
          { name: "Дата публикации", value: formattedAtDate },
          { name: AtomLocationIcon, value: `г. ${response.data.notices[0].address.city}, р-н. ${response.data.notices[0].address.district || "не указан"}, ул. ${response.data.notices[0].address.street || "не указана"}` },
          { name: "Окрас", value: response.data.color.color_name },
        ]
        this.optionalCharacteristics = [
          {name: "Кличка", value: response.data.nickname ? response.data.nickname : "Не указано"},
          {name: "Возраст", value: response.data.age ? response.data.age.age : "Не указано"},
          {name: "Пол", value: response.data.gender ? response.data.gender.gender : "Не указано"},
          {name: "Порода", value: response.data.breed ? response.data.breed.animal_breed_name : "Не указано"},
          {name: "Состояние здоровья", value: response.data.health ? response.data.health.health : "Не указано"},
          {name: "Стерилизация", value: response.data.sterilization ? response.data.sterilization.sterilization : "Не указано"}
        ]
        this.text_comment = response.data.notices[0].comment || "Не указано"
      } catch (error) {
        console.error('Error fetching notice details:', error)
      }
    },
  },
  mounted() {
    this.fetchData()
    this.fetchFilterBarData()
    this.fetchNoticeDetails()
  },
}
</script>

<style scoped>
.test {
  background: #EFEEF1;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #1C1B18;
  padding-left: 20px;
}
</style>
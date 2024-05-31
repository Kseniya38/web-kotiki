<template>
  <div class="notice_data">
  <atom-h1 :value_h1="'Объявление'" />
  <div class="notice_detail_container">
    <div class="notice_detail_left_column">
      <block-photo-viewer :photos="photos"/>
    </div>
    <div class="notice_detail_right_column">
      <block-contacts :contacts_list="contacts_list" :user_status="user_status"/>
      <molecule-infoblock :mandatory_characteristics="mandatoryCharacteristics" :optional_characteristics="optionalCharacteristics" />
    </div>
  </div>
  <molecule-comment-infoblock :text_p="text_comment" :value_h3="'Комментарий'" />
  </div>
  <block-recommendations :items_preview="latestPreviewItems" :value_h2="'Рекомендуемые объявления'" :url="'/search'" />
</template>

<script>
import AtomH1 from "@/components/atoms/H1.vue"
import BlockPhotoViewer from "@/components/blocks/DetailPhotoBlock.vue"
import BlockContacts from "@/components/blocks/ContactsBlock.vue"
import MoleculeInfoblock from "@/components/molecules/Infoblock.vue"
import AtomLocationIcon from "@/components/atoms/LocationIcon.vue"
import MoleculeCommentInfoblock from "@/components/molecules/CommentInfoblock.vue"
import BlockRecommendations from "@/components/blocks/RecommendationBlock.vue"
import axios from "axios"

export default {
  components: {BlockRecommendations, MoleculeCommentInfoblock, MoleculeInfoblock, BlockContacts, BlockPhotoViewer, AtomH1},
  data() {
    return {
      previewItems: [],
      latestPreviewItems: [],
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

      contacts_list: [],
      photos: [],
      mandatoryCharacteristics: [],
      optionalCharacteristics: [],
      text_comment: null,
      id: null,
      route: this.$route,
    }
  },
  props: {
    user_status: Boolean
  },
  methods: {
    async fetchRecommendationsData() {
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
      this.latestPreviewItems = this.previewItems.sort((a, b) => new Date(b.notices[0].createdAt) - new Date(a.notices[0].createdAt)).slice(0, 4)
    },
    async fetchNoticeDetails() {
      try {
        const response = await axios.get(`http://localhost:5000/api/animal/${this.id}`)
        this.contacts_list = [ { contact_type: "phone", contact_info: response.data.notices[0].user.telephone } || '', { contact_type: "link", contact_info: response.data.notices[0].user.social_media } || '']
        this.photos = []
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
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id
    this.fetchNoticeDetails()
    next()
  },
  mounted() {
    this.id = this.route.params.id
    this.fetchNoticeDetails()
    this.fetchRecommendationsData()
  },
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
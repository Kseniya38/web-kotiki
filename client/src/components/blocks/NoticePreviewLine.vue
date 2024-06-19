<template>
  <div class="preview_line">
    <molecule-notice-preview class="item_preview_line" :user_status="user_status" v-for="(item) in formattedItems"
                             :id="item.id"
                             :animal_type="item.animal_type"
                             :animal_status="item.animal_status"
                             :notice_status="item.notice_status"
                             :image_src_preview="item.imageSrc"
                             :date_preview="item.date"
                             :location_preview="item.location"
                             :color_preview="item.color" />
  </div>
</template>
<script>
import MoleculeNoticePreview from "@/components/molecules/NoticePreview.vue"

export default {
  name: "block-notice-preview-line",
  components: {
    MoleculeNoticePreview,
  },
  props: {
    items_preview: {
      type: Array,
      required: true,
    },
    user_status: Boolean
  },
  computed: {
    formattedItems() {
      return this.items_preview.map((item) => {
        const eventDate = new Date(item.notices[0].event_date)
        const formattedDate = `${eventDate.getDate()}.${eventDate.getMonth() + 1}.${eventDate.getFullYear()}`

        return {
          id: item.id,
          animal_type: item.animalTypeId,
          animal_status: item.animalStatusId,
          notice_status: item.notices[0].noticeStatusId,
          imageSrc: `/static/${item.photo.first}`,
          date: formattedDate,
          location: `г. ${item.notices[0].address.city}, р-н. ${item.notices[0].address.district || "не указан"}, ул. ${item.notices[0].address.street || "не указана"}`,
          color: item.color.color_name
        }
      })
    }
  }
}
</script>

<style>
.preview_line {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  height: fit-content;
  flex-wrap: wrap;
}
.item_preview_line {
  margin-right: 25px;
  margin-left: 25px;
}
</style>

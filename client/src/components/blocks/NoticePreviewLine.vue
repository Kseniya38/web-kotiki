<template>
  <div class="preview_line">
    <molecule-notice-preview :user_status="user_status" v-for="(item, index) in items_preview"
                             :id="index"
                             :animal_type="item.animal_type"
                             :animal_status="item.animal_status"
                             :notice_status="item.notice_status"
                             :image_src_preview="item.imageSrc"
                             :date_preview="item.date"
                             :location_preview="item.location"
                             :color_preview="item.color" />
  </div>
</template>
// выше в качестве id объявления взят номер из массива только для тестирования, после привязки бэка уникальный id объявления нужно брать из бд
<script>
import MoleculeNoticePreview from "@/components/molecules/NoticePreview.vue";

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
};
</script>

<style>
.preview_line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  height: fit-content;
  flex-wrap: wrap;
}
</style>

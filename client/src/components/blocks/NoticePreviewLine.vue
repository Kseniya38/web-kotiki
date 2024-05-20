<template>
  <div class="preview_line">
    <molecule-notice-preview v-for="(item, index) in items_preview"
                             :key="index"
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
  },
};
</script>

<style>
.preview_line {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

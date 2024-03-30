<template>
  <div class="preview-line">
    <molecule-notice-preview v-for="(item, index) in items_preview" :key="index" :image_src_preview="item.imageSrc" :date_preview="item.date" :location_preview="item.location" :color_preview="item.color" />
  </div>
</template>

<script>
import MoleculeNoticePreview from "@/components/molecules/NoticePreview.vue";

export default {
  name: "molecule-notice-preview-line",
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

<style scoped>
.preview-line {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

<template>
  <div class="preview-line">
    <NoticePreview v-for="(item, index) in items" :key="index" :imageSrc="item.imageSrc" :date="item.date" :location="item.location" :color="item.color" />
  </div>
</template>

<script>
import NoticePreview from "@/components/molecules/NoticePreview.vue";

export default {
  name: "PreviewLine",
  components: {
    NoticePreview,
  },
  props: {
    items: {
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

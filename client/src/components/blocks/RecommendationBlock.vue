<template>
  <div class="recommendation_block">
    <atom-h2 :value_h2="value_h2" />
    <block-notice-preview-line :items_preview="items_preview" />
    <atom-link class="link" :text_link="text_link" :url="url" />
  </div>
</template>

<script>
import AtomH2 from "@/components/atoms/H2.vue";
import BlockNoticePreviewLine from "@/components/blocks/NoticePreviewLine.vue";
import AtomLink from "@/components/atoms/Link.vue";

export default {
  name: "block-recommendations",
  components: {
    AtomLink,
    BlockNoticePreviewLine,
    AtomH2,
  },
  props: {
      value_h2: String,
      items_preview: Array,
      text_link: String,
      url: String,
  },
};
</script>

<style>
.recommendation_block {
  text-align: right;
}
</style>

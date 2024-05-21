<template>
  <div class="recommendation_block">
    <atom-h2 :value_h2="value_h2" />
    <block-notice-preview-line :user_status="user_status" :items_preview="items_preview" />
    <atom-link :text_link="'Перейти в поиск'" :url="'/search'" />
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
    items_preview: Array,
    value_h2: String,
    user_status: Boolean
  },
};
</script>

<style>
.recommendation_block {
  text-align: right;
  margin: 0 69px 50px 69px;
  height: auto;
}
</style>

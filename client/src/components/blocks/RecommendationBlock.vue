<template>
  <div class="recommendation_block">
    <atom-h2 :value_h2="value_h2" />
    <molecule-notice-preview-line :items_preview="items_preview" />
    <atom-link class="link" :text_link="text_link" :url="url" />
  </div>
</template>

<script>
import AtomH2 from "@/components/atoms/H2.vue";
import MoleculeNoticePreviewLine from "@/components/blocks/NoticePreviewLine.vue";
import AtomLink from "@/components/atoms/Link.vue";

export default {
  name: "molecule-recommendation-block",
  components: {
    AtomLink,
    MoleculeNoticePreviewLine,
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

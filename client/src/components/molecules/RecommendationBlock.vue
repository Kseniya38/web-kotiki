<template>
  <div class="recommendation-block">
    <H2 :value="value" />
    <PreviewLine :items="items" />
    <Link class="link" :text="text" :url="url" />
  </div>
</template>

<script>
import H2 from "@/components/atoms/H2.vue";
import PreviewLine from "@/components/molecules/NoticePreviewLine.vue";
import Link from "@/components/atoms/Link.vue";

export default {
  name: "RecommendationBlock",
  components: {
    H2,
    PreviewLine,
    Link,
  },
  props: {
      value: String,
      items: Array,
      text: String,
      url: String,
  },
};
</script>

<style scoped>
.recommendation-block {
  text-align: right;
}
</style>

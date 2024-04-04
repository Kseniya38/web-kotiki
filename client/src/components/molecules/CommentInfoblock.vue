<template>
<div class="comment_infoblock">
  <atom-h3 :value_h3="value_h3"/>
  <atom-p :text_p="text_p"/>
</div>
</template>

<script>
import AtomP from "@/components/atoms/P.vue";
import AtomH3 from "@/components/atoms/H3.vue";

export default {
  name: 'molecule-comment-infoblock',
  components: {AtomH3, AtomP},
  props: {
    value_h3: String,
    text_p:String
  }
}
</script>

<style >

</style>
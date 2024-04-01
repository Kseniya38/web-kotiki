<template>
<div class="comment">
<atom-h3 :value_h3="value_h3" />
  <atom-textarea :text_textarea_input="text_textarea_input"/>
</div>
</template>

<script>
import AtomTextarea from "@/components/atoms/TextArea.vue";
import AtomH3 from "@/components/atoms/H3.vue";

export default {
  name: 'molecule-comment',
  components: {AtomH3, AtomTextarea},
  props: {
    value_h3: String,
    text_textarea_input: String,
  }
}
</script>

<style >

</style>
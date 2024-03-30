<template>
  <div class="icons_bar">
    <atom-edit-notice-icon/>
    <atom-disactive-notice-icon/>
    <atom-active-notice-icon/>
  </div>
</template>

<script>
import AtomEditNoticeIcon from "@/components/atoms/EditNoticeIcon.vue";
import AtomActiveNoticeIcon from "@/components/atoms/ActiveNoticeIcon.vue";
import AtomDisactiveNoticeIcon from "@/components/atoms/DisactiveNoticeIcon.vue";

export default {
  name: 'atom-manage-notice-icons-bar',
  components: {AtomEditNoticeIcon, AtomActiveNoticeIcon, AtomDisactiveNoticeIcon},
  props: {

  }
}
</script>

<style>
.icons_bar {
  display: flex;
  flex-direction: column;
  text-align: right;
}
</style>
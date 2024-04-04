<template>
  <div class="icons_bar">
    <template v-if="notice_status === 'active'">
      <atom-edit-notice-icon/>
      <atom-disactive-notice-icon/>
    </template>
    <template v-else-if="notice_status === 'closed'">
      <atom-active-notice-icon/>
    </template>
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
    notice_status: String,
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

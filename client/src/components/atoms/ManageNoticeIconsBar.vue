<template>
  <div class="icons_bar">
    <template v-if="notice_status === 1">
      <atom-edit-notice-icon class="clickable_icon"/>
      <atom-disactive-notice-icon class="clickable_icon"/>
    </template>
    <template v-else-if="notice_status === 2">
      <atom-active-notice-icon class="clickable_icon"/>
    </template>
  </div>
</template>

<script>
import AtomEditNoticeIcon from "@/components/atoms/EditNoticeIcon.vue"
import AtomActiveNoticeIcon from "@/components/atoms/ActiveNoticeIcon.vue"
import AtomDisactiveNoticeIcon from "@/components/atoms/DisactiveNoticeIcon.vue"

export default {
  name: 'atom-manage-notice-icons-bar',
  components: {AtomEditNoticeIcon, AtomActiveNoticeIcon, AtomDisactiveNoticeIcon},
  props: {
    notice_status: Number,
  }
}
</script>

<style>
.icons_bar {
  display: flex;
  flex-direction: column;
  text-align: right;
}
.clickable_icon {
  cursor: pointer;
}
</style>

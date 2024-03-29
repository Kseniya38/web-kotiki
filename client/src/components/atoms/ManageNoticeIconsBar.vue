<template>
  <div class="icons_bar">
    <atom-user_icon_edit/>
    <atom-user_icon_disactive/>
    <atom-user_icon_active/>
  </div>
</template>

<script>
import AtomUser_icon_edit from "@/components/atoms/EditNoticeIcon.vue";
import AtomUser_icon_active from "@/components/atoms/ActiveNoticeIcon.vue";
import AtomUser_icon_disactive from "@/components/atoms/DisactiveNoticeIcon.vue";

export default {
  name: 'atom-user_icons',
  components: {AtomUser_icon_disactive, AtomUser_icon_active, AtomUser_icon_edit},
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
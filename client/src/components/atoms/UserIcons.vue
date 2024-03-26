<template>
  <div>
    <atom-user_icon_edit/>
    <atom-user_icon_active/>
    <atom-user_icon_disactive/>
  </div>
</template>

<script>
import AtomUser_icon_edit from "@/components/atoms/UserIconEdit.vue";
import AtomUser_icon_active from "@/components/atoms/UserIconActive.vue";
import AtomUser_icon_disactive from "@/components/atoms/UserIconDisactive.vue";

export default {
  name: 'atom-user_icons',
  components: {AtomUser_icon_disactive, AtomUser_icon_active, AtomUser_icon_edit},
  props: {

  }
}
</script>

<style scoped>

</style>
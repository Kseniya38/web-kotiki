<template>
<div class="icon">
  <img src="@/assets/icons/locationPreview.png" alt="" id="location" class="icon">
  <label class="label" for="location">{{location_icon}} {{location}}</label>
</div>
</template>

<script>
export default {
name: 'atom-location-icon',
    props: {
      location_icon: String,
      location:String
}
}
</script>

<style scoped>
.icon{
  display: flex;
  align-items: center;
  text-align: left;
}
</style>
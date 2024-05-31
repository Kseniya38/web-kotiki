<template>
  <div class="photo_viewer">
    <div class="preview_photos">
      <div class="preview_photo" v-for="(photo, index) in photos" :key="index" @click="selectPhoto(index)" :class="{ 'active': selectedIndex === index }">
        <img :src="photo" :alt="`Фото`" />
      </div>
    </div>
    <div class="main_photo">
      <img :src="selectedPhoto" alt="Фото" />
    </div>
  </div>
</template>

<script>
export default {
  name: "block-photo-viewer",
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedIndex: 0,
      photosArr: [],
    }
  },
  computed: {
    selectedPhoto() {
      return this.photos[this.selectedIndex]
    },
  },
  methods: {
    selectPhoto(index) {
      this.selectedIndex = index
    },
  },
}
</script>

<style scoped>
.photo_viewer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 664px;
}

.main_photo {
  width: 510px;
  height: 630px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  margin-left: 10px;
}

.main_photo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.preview_photos {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.preview_photo {
  width: 125px;
  height: 144px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
}

.preview_photo.active {
  border: 2px solid #7F9AE6;
}

.preview_photo img {
  width: 125px;
  height: 100%;
  object-fit: cover;
}
</style>

<template>
  <div class="carousel">
    <img :src="images[currentIndex]" alt="Фото" class="slide"/>
    <img :src="images[currentIndex+1]" alt="Фото" class="slide"/>
    <div class="arrow left" @click="prevSlide">
      <img src="@/assets/icons/leftIcon.svg" alt="Previous" />
    </div>
    <div class="arrow right" @click="nextSlide">
      <img src="@/assets/icons/rightIcon.svg" alt="Next" />
    </div>
  </div>
</template>

<script>
export default {
  // переписать полностью компонент - слайдер не нужен, просто ряд фото с иконками удаления
  name: "block-photo-line",
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    images: Array,
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  padding-left: 30px;
  padding-right: 30px;
}

.slide {
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.arrow:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}
</style>

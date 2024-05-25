<template>
  <div class="animal_status_icon">
    <template v-if="animal_status === 1">
        <button class="icon_btn_animal">
          <img src="@/assets/icons/lostPet.svg" alt="Потерян питомец">
        </button>
    </template>
    <template v-else-if="animal_status === 2 & animal_type === 3">
      <button class="icon_btn_animal">
        <img src="@/assets/icons/foundCat.svg" alt="Найден кот">
      </button>
    </template>
    <template v-else-if="animal_status === 2 & animal_type === 5">
      <button class="icon_btn_animal">
        <img src="@/assets/icons/foundDog.svg" alt="Найден пес">
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'atom-animal-status-icon',
  props: {
    animal_status: Number,
    animal_type: Number,
  }
}
</script>

<style>
.icon_btn_animal {
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
}
</style>
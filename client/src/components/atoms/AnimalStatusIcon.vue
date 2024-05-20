<template>
  <div class="animal_status_icon">
    <template v-if="animal_status === 'lost'">
        <button class="icon_btn_animal">
          <img src="@/assets/icons/lostPet.svg" alt="Потерян питомец">
        </button>
    </template>
    <template v-else-if="animal_status === 'found' & animal_type === 'cat'">
      <button class="icon_btn_animal">
        <img src="@/assets/icons/foundCat.svg" alt="Найден кот">
      </button>
    </template>
    <template v-else-if="animal_status === 'found' & animal_type === 'dog'">
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
    animal_status: String,
    animal_type: String,
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
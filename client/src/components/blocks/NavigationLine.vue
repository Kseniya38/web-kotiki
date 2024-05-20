<template>
  <div class="nav_line">
  <div class="navigation_line">
    <div v-for="index in 4" :key="index" class="step_item" @click="goToStep(index)">
      <span class="text_step" :class="{ 'active': step === index }"><span>Шаг {{ index }}</span></span>
      <div class="step_number" :class="{ 'active': step === index }"/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'block-navigation-line',
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    goToStep(step) {
      // переход к соответствующему шагу
      console.log('Переход к шагу', step);
    }
  }
}
</script>

<style scoped>
.navigation_line {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
}

.step_item {
  text-align: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.step_number {
  width: 289px;
  height: 6px;
  border-radius: 8px;
  transition: background-color 0.3s;
  background-color: #DFBEF9;
}

.text_step {
  color: #DFBEF9;
  transition: color 0.3s;
}

.text_step.active {
  color: #6504B5;
}

.step_number.active {
  background-color: #6504B5;
}

.step_item:active .text_step {
  color: #6504B5;
}

.step_item:hover .text_step {
  color: #6504B5;
}

.step_item:active .step_number {
  background-color: #6504B5;
}

.step_item:hover .step_number {
  background-color: #6504B5;
}
.nav_line {
  width: 100%;
  justify-content: center;
  display: flex;
}
</style>


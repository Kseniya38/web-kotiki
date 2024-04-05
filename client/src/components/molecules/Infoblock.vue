<template>
  <div class="infoblock">
    <div>
      <atom-characteristic v-for="(characteristic, index) in mandatory_characteristics" :key="index" :name_characteristic="characteristic.name" :value_characteristic="characteristic.value" />
    </div>
    <div v-for="(characteristic) in optional_characteristics">
      <atom-characteristic :name_characteristic="characteristic.name" :value_characteristic="characteristic.value" />
    </div>
  </div>
</template>

<script>
import AtomCharacteristic from "@/components/atoms/Characteristic.vue";

export default {
  name: 'molecule-infoblock',
  components: {
    AtomCharacteristic,
  },
  props: {
      mandatory_characteristics: {
      type: Array,
      required: true,
    },
    optional_characteristics: Array,
  },
};
</script>

<style>
</style>

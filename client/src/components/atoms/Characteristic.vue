<template>
  <div class="characteristic">
    <div class="name_characteristic">
      <strong>
        <component :is="nameCharacteristicComponent" v-if="nameIsComponent"/>
        <span v-else>{{ name_characteristic }}:</span>
      </strong>
    </div>
    <div class="value_characteristic">
      {{ value_characteristic }}
    </div>
  </div>
</template>

<script>
import AtomLocationIcon from "@/components/atoms/LocationIcon.vue"

export default {
  name: 'atom-characteristic',
  props: {
    name_characteristic: [String, Object], // может быть текстом или компонентом
    value_characteristic: String
  },
  computed: {
    nameIsComponent() {
      return typeof this.name_characteristic === 'object'
    },
    nameCharacteristicComponent() {
      if (this.nameIsComponent) {
        return this.name_characteristic
      } else {
        return AtomLocationIcon
      }
    }
  },
  components: {
    AtomLocationIcon
  },
}
</script>

<style>
.characteristic {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.name_characteristic {
  font-weight: bold;
  font-size: 20px;
  margin-right: 5px;
}
.value_characteristic{
  font-size: 20px;
}
</style>
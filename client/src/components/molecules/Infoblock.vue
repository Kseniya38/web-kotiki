// есть два дива.
// в первом диве 4 атома обязательные три поля: дата инцидента, локация, окрас, и одно автоматическое: дата публикации. возможно тоже можно через массив делать
// во втором - массив необязательных по аналогии с рядом превью. элемент массива - атом характеристики.
// компонент характеристики умный - умеет и иконку и текст получать на вход.

<template>
  <div class="infoblock">
    <atom-characteristic :name_characteristic=" title_data" :value_characteristic ="date"/>
    <atom-characteristic :name_characteristic=" title_publication_date" :value_characteristic ="publication_date"/>
    <atom-characteristic :name_characteristic=" title_color" :value_characteristic ="color"/>
    <atom-location-icon :location_icon :location="location"/>
    <atom-characteristic :name_characteristic=" title_nickname" :value_characteristic ="nickname"/>
    <atom-characteristic :name_characteristic=" title_age" :value_characteristic ="age"/>
    <atom-characteristic :name_characteristic=" title_gender" :value_characteristic ="gender"/>
    <atom-characteristic :name_characteristic=" title_breed" :value_characteristic ="breed"/>
    <atom-characteristic :name_characteristic=" title_health" :value_characteristic ="health"/>
    <atom-characteristic :name_characteristic=" title_sterilization" :value_characteristic ="sterilization"/>
  </div>
</template>

<script>
import AtomCharacteristic from "@/components/atoms/Characteristic.vue";
import AtomLocationIcon from "@/components/atoms/LocationIcon.vue";

export default {
  name: 'molecule-infoblock',
  components: {AtomLocationIcon, AtomCharacteristic},

  props: {
    title_data:String,
    date:String,
    title_publication_date: String,
    publication_date:String,
    title_color: String,
    color: String,
    location_icon: String,
    location: String,
    title_nickname: String,
    nickname: String,
    title_gender: String,
    gender: String,
    title_health: String,
    health: String,
    title_age: String,
    age: String,
    title_breed: String,
    breed: String,
    title_sterilization: String,
    sterilization: String,
  },
}
</script>

<style >
.infoblock{
  flex-direction: column;
}
</style>
<template>
  <div>
<label><strong>Дата пропажи: </strong></label><label for="date">{{date}}</label>
  </div>
  <div>
    <label><strong>Дата публикации: </strong></label><label for="date">{{date}}</label>
  </div>
  <div>
    <label><strong>Окрас: </strong></label><label for="color">{{color}}</label>
  </div>
      <div>
        <img src="@/assets/icons/locationPreview.png" alt="" id="location">
        <label for="location">{{location}}</label>
      </div>
  <div>
    <label><strong>Кличка: </strong></label><label for="nickname">{{nickname}}</label>
  </div>
  <div>
    <label><strong>Пол: </strong></label><label for="gender">{{gender}}</label>
  </div>
  <div>
    <label><strong>Порода: </strong></label><label for="breed">{{breed}}</label>
  </div>
  <div>
    <label><strong>Возраст: </strong></label><label for="age">{{age}}</label>
  </div>
  <div>
    <label><strong>Состояние здоровья: </strong></label><label for="health">{{health}}</label>
  </div>
  <div>
    <label><strong>Стерилизация: </strong></label><label for="sterilization">{{sterilization}}</label>
  </div>
  <div>
    <h3>Комментарий</h3>
    <textarea maxlength = "565" v-model="message" placeholder="Текст"></textarea>
  </div>
</template>

<script>
export default {
  name: 'molecule-infoblock',
  props: {
    date: String,
    location: String,
    color: String,
    nickname: String,
    gender: String,
    health: String,
    age: String,
    breed: String,
    sterilization: String
  }
}
</script>

<style >

</style>
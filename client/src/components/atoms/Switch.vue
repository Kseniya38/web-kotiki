<template>
<div>
  <input type="radio" name="type" id="cat">
  <label for="cat">
    <i class="fa fa-cat"></i>
    <span>Кошка</span>
  </label>
  <input type="radio" name="type" id="dog">
  <label for="dog">
    <i class="fa fa-dog"></i>
    <span>Собака</span>
  </label>
</div>
</template>

<script>
export default {
  name: 'atom-switch'
}

</script>

<style scoped>
input[type="radio"] {
  -webkit-appearance: none;
}
input[type="radio"]:checked + label {
  background-color: #dfBef9;
  color: #6504B5;
  box-shadow: -2px 2px 20px -8px #010101;
  border: 1px solid #6504B5;
}

label {
  height: 52px;
  width: 279px;
  border: 1px solid #1C1B18;
  border-radius: 8px;
  color: #1C1B18;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .3s ease;
}
label .fa {
  font-size: 70px;
}
label span {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  font-size: 16px;
  margin-top: 2px;
  text-align: center;
}
div {
  display:  flex;
}
</style>
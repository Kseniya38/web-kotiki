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
  color: #fff;
  box-shadow: -2px 2px 20px -8px #010101;
}

label {
  height: 52px;
  width: 279px;
  border: 5px solid #dfBef9;
  border-radius: 8px;
  color: #dfBef9;
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
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 10px;
}
div {
  display:  flex;
}
</style>
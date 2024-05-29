<template>
<div class="switch">
  <input type="radio" name="type" id="left_switch">
  <label for="left_switch">
    <i class="fa fa_left_switch"></i>
    <span>{{ name_left_switch }}</span>
  </label>
  <input type="radio" name="type" id="right_switch">
  <label for="right_switch">
    <i class="fa fa_right_switch"></i>
    <span>{{ name_right_switch }}</span>
  </label>
</div>
</template>

<script>
export default {
  name: 'atom-switch',
  props: {
    name_left_switch: String,
    name_right_switch: String,
  },
}
</script>

<style>
.switch{
  flex-direction: row;
  display:  flex;
  justify-content: space-between;
  max-width: 582px;
  input[type="radio"] {
    -webkit-appearance: none;
  }
  input[type="radio"]:checked + label {
    background-color: #dfBef9;
    color: #6504B5;
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
}

</style>
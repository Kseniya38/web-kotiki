<template>
  <div>
    <input type="checkbox" id="a-checkbox"/>
    <label for="a-checkbox">{{label_checkbox}}</label>
  </div>
</template>

<script>
export default {
  name: 'atom-checkbox',
  props: {
    label_checkbox: String
  }
}
</script>

<style scoped>
label {
  color: #1C1B18;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 14px;
  vertical-align: middle;
  margin: 0;
}
#a-checkbox {
  background-color: #1C1B18;
  padding: 4px;
  border: 2px solid #6504B5;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 0 12px 0 4px;
}
div {
  margin: 5px 5px 5px 0;
}
</style>
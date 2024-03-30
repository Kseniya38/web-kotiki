<template>
  <div>
    <div>
      <label>{{ name_drop_down }}</label>
    </div>
    <div>
      <p>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Черный</label>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Белый</label>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Серый</label>
      </p>

    </div>

    <div>
      <p>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Коричневый</label>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Бежевый</label>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Рыжий</label>
      </p>

    </div>
    <div>
      <p>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Полосатый</label>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Пятнистый</label>
        <input type="checkbox" id="b-checkbox"/>
        <label for="b-checkbox">Однотонный</label>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'molecule-many-checkboxes',
  props: {
    name_drop_down: String,
  }
  }
</script>

<style >

</style>
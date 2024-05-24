<template>
  <div class="filter_container">
    <div>
      <VueDatePicker class="drop_down_filter_item" calendar-cell-class-name="dp-custom-cell" v-model="date" :format="format" locale="ru" range auto-apply :max-date="new Date()" :enable-time-picker="false"/>
    </div>
    <div>
      <atom-drop-down-list class="drop_down_filter_item" v-for="(item, index) in items_drop_down"
                               :key="index"
                               :name_drop_down="item.name_drop_down"
                               :list_drop_down="item.list_drop_down"/>
      </div>
    <atom-button class="filter_button" @click="handleButtonClick">Показать</atom-button>
  </div>
</template>

<script>
import AtomDropDownList from "@/components/atoms/DropDownList.vue";
import AtomButton from "@/components/atoms/Button.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';
import { ref, onMounted } from 'vue';

const date = ref();

onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.modelValue = [startDate, endDate];
})

const format = ([startDate, endDate]) => {
  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth() + 1;
  const startYear = startDate.getFullYear();

  const endDay = endDate.getDate();
  const endMonth = endDate.getMonth() + 1;
  const endYear = endDate.getFullYear();

  return `${startDay}.${startMonth}.${startYear} - ${endDay}.${endMonth}.${endYear}`;
}
export default {
  setup() {
    return { date, format }
  },
  name: "block-filter-bar",
  components: {
    VueDatePicker,
    AtomButton,
    AtomDropDownList
  },
  props: {
    items_drop_down: {
        type: Array,
        default: () => []
    },
  },
  methods: {
    handleButtonClick() {
      // Логика обработки нажатия кнопки
    }
  },
  computed: {
    /*formattedDropdownData() {
      return {
        "animal_types": items_drop_down[0].animal_types.map(item => item.animal_type_name),
        "breeds": items_drop_down[1].breeds.map(item => item.animal_breed_name),
        "animal_statuses": items_drop_down[2].animal_statuses.map(item => item.animal_status_name),
        "colors": items_drop_down[3].colors.map(item => item.color_name),
        "ages": items_drop_down[4].ages.map(item => item.age),
        "genders": items_drop_down[5].genders.map(item => item.gender),
        "health": items_drop_down[6].health.map(item => item.health),
        "sterilizations": items_drop_down[7].sterilizations.map(item => item.sterilization)
      }*/

  }
};
</script>

<style>
.drop_down_filter_item {
  margin-bottom: 20px;
}
.filter_container {
  background-color: #FFFFFF;
  border-radius: 8px;
  max-width: 270px;
  padding: 16px;
  height: fit-content;
}
.filter_button {
  width: 100%;
  margin-top: 20px;
}
.dp-custom-cell {
  --dp-hover-color: #DFBEF9;
  --dp-primary-color: #6504B5;
  --dp-range-between-dates-background-color: var(--dp-hover-color, #DFBEF9);
  --dp-range-between-border-color: var(--dp-hover-color, #DFBEF9);
}
</style>
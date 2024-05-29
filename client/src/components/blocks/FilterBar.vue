<template>
  <div class="filter_container">
    <div>
      <VueDatePicker
          class="drop_down_filter_item"
          calendar-cell-class-name="dp-custom-cell"
          v-model="date"
          :format="format"
          locale="ru"
          range
          auto-apply
          :max-date="new Date()"
          :enable-time-picker="false"
      />
    </div>
    <div>
      <atom-drop-down-list
          class="drop_down_filter_item"
          v-for="(item, index) in items_drop_down"
          :key="index"
          :name_drop_down="item.name_drop_down"
          :list_drop_down="item.list_drop_down"
          @update:checkboxStates="handleCheckboxStatesUpdate(index, $event)"
      />
      </div>
    <atom-button class="filter_button" @click="handleButtonClick">Показать</atom-button>
  </div>
</template>

<script>
import AtomDropDownList from "@/components/atoms/DropDownList.vue"
import AtomButton from "@/components/atoms/Button.vue"
import VueDatePicker from "@vuepic/vue-datepicker"
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, onMounted } from 'vue'
import axios from "axios"
import { mapActions } from 'vuex'

const date = ref()
const InterpretationArray = [
  { name: 'animalTypeId', list: [ { id: 4 }, { id: 5 }, { id: 3 } ]},
  { name: 'breedId', list: [ { id: 1 }, { id: 2 }, { id: 3 } ]},
  { name: 'animalStatusId', list: [ { id: 1 }, { id: 2 } ]},
  { name: 'colorId', list: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]},
  { name: 'ageId', list: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]},
  { name: 'genderId', list: [ { id: 1 }, { id: 2 } ]},
  { name: 'healthId', list: [ { id: 1 }, { id: 2 }, { id: 3 } ]},
  { name: 'sterilizationId', list: [ { id: 1 }, { id: 2 } ]}
]

onMounted(() => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
  date.modelValue = [startDate, endDate]
})

const format = ([startDate, endDate]) => {
  const startDay = startDate.getDate()
  const startMonth = startDate.getMonth() + 1
  const startYear = startDate.getFullYear()

  const endDay = endDate.getDate()
  const endMonth = endDate.getMonth() + 1
  const endYear = endDate.getFullYear()

  return `${startDay}.${startMonth}.${startYear} - ${endDay}.${endMonth}.${endYear}`
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
  data() {
    return {
      checkboxStates: {}
    }
  },
  methods: {
    ...mapActions(['updatePreviewItems']),
    async handleButtonClick() {
      console.log('Выбранные параметры:', this.checkboxStates)
      try {
        const response = await this.fetchFilteredItems()
        await this.updatePreviewItems(response.data.rows)
      } catch (error) {
        console.error('Error fetching filtered items:', error)
      }
    },
    handleCheckboxStatesUpdate(index, checkboxStates) {
      this.checkboxStates[index] = checkboxStates
    },
    async fetchFilteredItems() {
      const filters = this.formatFilters()
      const params = {
        page: 1,
        limit: 9,
        date_lowerRange: this.date[0].toISOString(),
        date_upperRange: this.date[1].toISOString(),
        ...filters
      }
      const response = await axios.get('http://localhost:5000/api/animal/', {params})
      return response
    },
    formatFilters() {
      const filters = {}

      Object.keys(this.checkboxStates).forEach((key) => {
        const checkboxState = this.checkboxStates[key]
        const interpretationItem = InterpretationArray[key]

        if (interpretationItem) {
          const selectedIds = Object.keys(checkboxState)
              .filter((index) => checkboxState[index])
              .map((index) => interpretationItem.list[index].id)

          if (selectedIds.length > 0) {
            filters[interpretationItem.name] = selectedIds
          }
        }
      })
      console.log(filters)
      return filters
    }

  }
}
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
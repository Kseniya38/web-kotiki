<template>
  <div>
    <h1>Тест атомов</h1>
    <atom-logo/>
    <atom-h1 :value="h1"/>
    <atom-h2 :value="h2"/>
    <atom-h3 :value="h3"/>
    <atom-button>Кнопка</atom-button>
    <atom-link :url="url" :text="link"></atom-link>
    <atom-checkbox :label="label"/>
    <atom-drop_down_list :drop_down_name="drop_name" :list="list"/>
    <atom-view_button>Посмотреть</atom-view_button>
    <atom-user_icons/>
    <atom-description_preview :date="date" :location="location" :color="color"/>
  </div>

</template>

<script>
import AtomH1 from "@/components/atoms/H1.vue";
import AtomH2 from "@/components/atoms/H2.vue";
import AtomH3 from "@/components/atoms/H3.vue";
import AtomButton from "@/components/atoms/Button.vue";
import AtomLogo from "@/components/atoms/Logo.vue";
import AtomLink from "@/components/atoms/Link.vue";
import AtomCheckbox from "@/components/atoms/CheckBox.vue";
import AtomDrop_down_list from "@/components/atoms/DropDownList.vue";
import AtomView_button from "@/components/atoms/ViewButton.vue";
import AtomUser_icons from "@/components/atoms/UserIcons.vue";
import AtomDescription_preview from "@/components/atoms/DescriptionPreview.vue";
export default {
  components: {
    AtomDescription_preview,
    AtomUser_icons,
    AtomView_button,
    AtomDrop_down_list,
    AtomCheckbox,
    AtomLink,
    AtomLogo,
    AtomButton,
    AtomH3,
    AtomH2,
    AtomH1
  },
  data() {
    return {
      h1: 'Котики',
      h2: 'Котики',
      h3: 'Котики',
      link: 'Ссылка',
      url: "https://www.google.com/",
      label: "Название характеристики",
      drop_name: 'Окрас',
      list: ['Черный', 'Белый', 'Зебра', 'Инверсная зебра'],
      file1: "@/src/assets/icons/activeNotice.png",
      date: '20 сентября 2020',
      location: 'Иркутск',
      color: 'Белый'
    }
  }
}
</script>

<style scoped>

</style>

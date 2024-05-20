<template>
  <div class="user_menu">
    <div class="menu_item" :class="{ 'active': activeTab === 'notices' }">
      <span class="item_title first">Объявления</span>
    </div>
    <div class="menu_item clickable" :class="{ 'active': activeTab === 'active' }" @click="setActiveTab('active')">
      <span class="item_title">Активные</span>
    </div>
    <div class="menu_item clickable" :class="{ 'active': activeTab === 'closed' }" @click="setActiveTab('closed')">
      <span class="item_title">Закрытые</span>
    </div>
    <div class="menu_item clickable" :class="{ 'active': activeTab === 'personal' }" @click="setActiveTab('personal')">
      <span class="item_title first">Личные данные</span>
    </div>
    <div class="logout_link">
      <atom-link :text_link="'Выход'" :url="''" class="logout_text"/>
    </div>
  </div>
</template>

<script>
import AtomLink from "@/components/atoms/Link.vue";

export default {
  name: "block-menu-personal-cabinet",
  components: {AtomLink},
  data() {
    return {
      activeTab: "active",
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.user_menu {
  display: flex;
  flex-direction: column;
  justify-content: right;
  background-color: transparent;
  border-right: solid 1px #7F9AE6;
  max-width: 256px;
  padding-right: 8px;
  padding-bottom: 19px;
  padding-top: 19px;
}

.menu_item {
  width: 100%;
  padding: 16px 8px 16px 0;
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
  text-align: right;
}
.clickable {
  cursor: pointer;
}
.menu_item.active {
  background-color: #7F9AE6;
  color: #fff;
}

.item_title {
  font-weight: 400;
  font-size: 24px;
}

.first {
  font-weight: 700;
}

.logout_link {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
}

.logout_text {
  font-weight: lighter;
  font-size: 20px;
  transition: color 0.3s;
}

</style>

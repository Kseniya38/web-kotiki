<template>
  <div class="contact_item" @click="toggleContactInfo">
    <div class="contact_icon_wrapper">
      <img class="contact_icon" :src="displayedIcon" alt="Контактная информация">
    </div>
    <div class="contact_info_wrapper">
      <span>{{ displayedContactInfo }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "atom-contact-item",
  props: {
    contact_info: String,
    contact_type: String,
  },
  data() {
    return {
      isContactInfoVisible: false,
    };
  },
  computed: {
    displayedIcon() {
      if (this.contact_type === "phone") {
        return require("@/assets/icons/phoneIcon.svg");
      } else if (this.contact_type === "link") {
        return require("@/assets/icons/linkIcon.svg");
      }
    },
    displayedContactInfo() {
      if (this.isContactInfoVisible) {
        return this.contact_info;
      } else {
        return this.contact_info.replace(/./g, "x");
      }
    },
  },
  methods: {
    toggleContactInfo() {
      this.isContactInfoVisible = !this.isContactInfoVisible;
    },
  },
}
</script>

<style>
.contact_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32px;
  min-height: 72px;
  background-color: #7F9AE6;
  border: none;
  border-radius: 8px;
  max-width: 470px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;
  margin: 8px;

  .contact_icon_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 15%;
    overflow-y: auto;
  }

  .contact_info_wrapper {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    margin: 16px 0;
  }
}
</style>


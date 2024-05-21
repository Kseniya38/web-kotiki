<template>
  <div class="footer_block d_flex">
    <div class="footer d_flex">
      <atom-logo class="logo"/>
      <atom-link class="footer_link" :url="politic_url" :text_link='"Политика конфиденциальности"'/>
      <atom-link class="footer_link" :url="mail_url" :text_link='"Напишите нам: email@gmail.com"'/>
      </div>
    </div>

</template>

<script>

import AtomLogo from "@/components/atoms/Logo.vue";
import AtomLink from "@/components/atoms/Link.vue";

export default {
  name: "block-footer",
  components: {
    AtomLink,
    AtomLogo,
  },
  props: {
    politic_url:String,
    mail_url: String,
  },
  methods: {
    handleButtonClick() {
      // Логика обработки нажатия кнопки
    }
  },
};
</script>

<style>
.footer {
  color: #FFFFFF;
  margin: 4px;
  align-items: center;
  width: 1210px;
  justify-content: space-between;
  padding: 30px 0;
  font-size: 16px;
}
.d_flex {
  display: flex;
}
.footer_block {
  width: 100%;
  background-color: #6504B5;
  justify-content: center;
}
.logo {
  font-size: 20px;
  margin-right: 30px;
}

.footer_link {
  color: white;
  text-decoration: underline;
  transition: color 0.3s ease;
  cursor: pointer;
}

.footer_link:hover, .footer_link:focus {
  color: #DFBEF9;
}

.footer_link.visited {
  color: #7F9AE6;
}
</style>

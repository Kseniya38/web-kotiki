<template>
  <a :href="url" :class="{ 'visited': isVisited }" @click="handleClick">{{text_link}}</a>
</template>

<script>
export default {
  name: 'atom-link',
  props: {
    text_link: String,
    url: String
  },
  data() {
    return {
      isVisited: false,
    }
  },
  methods: {
    handleClick(event) {
      this.isVisited = true;
      this.$emit('click', event)
    },
  }
}
</script>

<style>
a {
  color: #7F9AE6;
  text-decoration: underline;
  transition: color 0.3s ease;
  cursor: pointer;
}

a:hover, a:focus {
  color: #6504B5;
}

a.visited {
  color: #DFBEF9;
}
</style>
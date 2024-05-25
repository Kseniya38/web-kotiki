<template>
  <div class="logo" @click="handleLogoClick">
    <p>БАЗА ПОТЕРЯШЕК.РФ</p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'atom-logo',
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    handleLogoClick() {
      this.router.replace('/')
    }
  }
}
</script>

<style scoped>
.logo {
  font-family: Montserrat-Medium, sans-serif;
  font-size: 20px;
  cursor: pointer;
}

</style>
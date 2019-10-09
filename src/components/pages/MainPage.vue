<template>
  <div class="main-page-container">
    <the-header />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "MainPage",
  components: {
    TheHeader
  }
}
</script>

<style scoped>
.main-page-container {
  height: 100vh;
  background: #151515;
}
</style>
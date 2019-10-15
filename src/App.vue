<template>
  <div id="app">
    <main-page />
  </div>
</template>

<script>
import MainPage from "@/components/pages/MainPage";

export default {
  name: 'app',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  overflow-x: hidden;
  background: white;
  font-family: 'Montserrat', Helvetica, sans-serif;
  line-height: 1.4;
}

::selection {
  background: #74cef3;
}

::-moz-selection {
  background: #74cef3;
}
</style>

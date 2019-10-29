<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  overflow: hidden;
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

<template>
  <div class="the-header-container">
    <header>
      <router-link to="/" tag="div">
        <img src="../assets/happytodo.png" alt="happy to do logo">
      </router-link>
      <router-link :to="routerLink" tag="button">{{routerText}}</router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    routerText: String,
    routerLink: String
  }
}
</script>

<style scoped>
header {
  width: 100%;
  background: #011d2d;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
}

button {
  color: white;
  background: #63c8f1;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
}

button:hover {
  background: #50c1f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 5px 10px rgba(0, 0, 0, 0.15);
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

img {
  cursor: pointer;
}

</style>
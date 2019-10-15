<template>
  <div class="the-header-container">
    <header>
      <h1>something</h1>
      <h1>todo.</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 20px 50px;
}

h1 {
  color: #63c8f1;
  font-size: 48px;
  line-height: 0.9;
  text-transform: lowercase;
  text-align: right;
}

@media only screen and (max-width: 768px) {
  header {
    flex-direction: row;
    justify-content: flex-end;
  }

  h1 {
    margin-left: 20px;
  }
}
</style>